import { useState } from "react";
import * as XLSX from "xlsx";
import { formatCurrency } from "@/lib/utils";
import AmortTable from "./AmortTable";
import AmortCharts from "./AmortCharts";
import AmortSummary from "./AmortSummary";

export default function Amortization() {
  // ===============================
  // STATE (DO NOT REMOVE)
  // ===============================
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenureYears, setTenureYears] = useState("");
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [summary, setSummary] = useState(null);

  // ===============================
  // API CALL → FASTAPI
  // ===============================
  const calculateAmortization = async () => {
    if (!loanAmount || !interestRate || !tenureYears) return;

    const response = await fetch("http://127.0.0.1:8000/amortization", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loan_amount: Number(loanAmount),
        annual_rate: Number(interestRate),
        years: Number(tenureYears),
      }),
    });

    const data = await response.json();

    // Backend shape: { emi, table, summary }
    setEmi(data.emi);
    setSchedule(data.table);
    setSummary(data.summary);
  };

  const resetForm = () => {
    setLoanAmount("");
    setInterestRate("");
    setTenureYears("");
    setEmi(null);
    setSchedule([]);
    setSummary(null);
  };

  const downloadAnalysis = () => {
    if (!schedule.length || !summary) return;

    const wb = XLSX.utils.book_new();

    // Sheet 1: Amortization schedule (table)
    const tableSheet = XLSX.utils.json_to_sheet(
      schedule.map((row) => ({
        Year: row.year,
        "Starting Balance": row.starting_balance,
        "Total Principal": row.total_principal,
        "Total Interest": row.total_interest,
        "Yearly EMI": row.yearly_emi,
        "Ending Balance": row.ending_balance,
      }))
    );
    XLSX.utils.book_append_sheet(wb, tableSheet, "Schedule");

    // Sheet 2: Summary
    const summarySheet = XLSX.utils.json_to_sheet([
      {
        "Monthly EMI": summary.emi,
        "Total Principal": summary.total_principal,
        "Total Interest": summary.total_interest,
        "Total Payment": summary.total_payment,
      },
    ]);
    XLSX.utils.book_append_sheet(wb, summarySheet, "Summary");

    // Sheet 3: Chart data (principal vs interest per year)
    const chartSheet = XLSX.utils.json_to_sheet(
      schedule.map((row) => ({
        Year: row.year,
        Principal: row.total_principal,
        Interest: row.total_interest,
      }))
    );
    XLSX.utils.book_append_sheet(wb, chartSheet, "ChartData");

    XLSX.writeFile(wb, "money-math-analysis.xlsx");
  };

  return (
    <section
      id="amortization"
      className="relative pt-48 pb-32 px-6 scroll-mt-50 max-w-screen-xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-7xl font-bold text-emerald-900 text-center mb-6">
        Loan Amortization
      </h2>

      {/* Subheading */}
      <p className="text-lg md:text-xl font-semibold text-emerald-800 text-center max-w-3xl mx-auto mb-20">
        Understand how your loan is repaid over time with a detailed amortization
        schedule showing principal, interest, and outstanding balance—just like
        real-world banking systems.
      </p>

      {/* FORM CARD */}
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur rounded-3xl border border-emerald-200 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Loan Amount */}
          <div className="flex flex-col">
            <label className="font-semibold text-emerald-900 mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="rounded-xl border border-emerald-200 px-4 py-3"
            />
          </div>

          {/* Interest */}
          <div className="flex flex-col">
            <label className="font-semibold text-emerald-900 mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="rounded-xl border border-emerald-200 px-4 py-3"
            />
          </div>

          {/* Tenure */}
          <div className="flex flex-col">
            <label className="font-semibold text-emerald-900 mb-2">
              Tenure (Years)
            </label>
            <input
              type="number"
              value={tenureYears}
              onChange={(e) => setTenureYears(e.target.value)}
              className="rounded-xl border border-emerald-200 px-4 py-3"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6">
          <button
            onClick={calculateAmortization}
            className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition"
          >
            Calculate Amortization
          </button>

          <button
            onClick={resetForm}
            className="px-8 py-4 border border-emerald-600 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* EMI DISPLAY */}
      {emi && (
        <p className="text-center mt-20 text-3xl font-bold text-emerald-900">
          Monthly EMI: {formatCurrency(emi)}
        </p>
      )}

      {/* OUTPUTS: TABLE + CHARTS + SUMMARY (NO 3D CARD ON TABLE) */}
      {schedule.length > 0 && (
        <section className="mt-24 space-y-12">
          <AmortTable schedule={schedule} />
          <AmortCharts schedule={schedule} />
          {summary && <AmortSummary summary={summary} />}

          {/* Download button */}
          {summary && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={downloadAnalysis}
                className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 transition"
              >
                Download analysis
              </button>
            </div>
          )}
        </section>
      )}
    </section>
  );
}
