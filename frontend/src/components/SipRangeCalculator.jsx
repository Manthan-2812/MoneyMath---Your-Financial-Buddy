import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { formatCurrency } from "@/lib/utils";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function SipRangeCalculator() {
  const [sipAmount, setSipAmount] = useState("");
  const [minRate, setMinRate] = useState("");
  const [maxRate, setMaxRate] = useState("");
  const [years, setYears] = useState("");

  const [summary, setSummary] = useState(null);
  const [fixedPath, setFixedPath] = useState([]);
  const [variablePath, setVariablePath] = useState([]);

  const calculateRange = async () => {
    if (!sipAmount || !minRate || !maxRate || !years) return;

    const response = await fetch(`${BASE_URL}/sip-range`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sip_amount: Number(sipAmount),
        min_rate: Number(minRate),
        max_rate: Number(maxRate),
        years: Number(years),
      }),
    });

    const data = await response.json();
    setSummary(data.summary);
    setFixedPath(data.fixed_path);
    setVariablePath(data.variable_path);
  };

  const reset = () => {
    setSipAmount("");
    setMinRate("");
    setMaxRate("");
    setYears("");
    setSummary(null);
    setFixedPath([]);
    setVariablePath([]);
  };

  const combinedData =
    fixedPath && variablePath && fixedPath.length === variablePath.length
      ? fixedPath.map((row, idx) => ({
          year: row.year,
          fixed: row.balance,
          variable: variablePath[idx].balance,
        }))
      : [];

  return (
    <section
      className="relative pt-24 pb-32 px-6 scroll-mt-50 max-w-screen-xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 text-center mb-6">
        Check with the possible range of returns.
      </h2>

      <p className="text-lg md:text-xl font-semibold text-emerald-800 text-center max-w-3xl mx-auto mb-20">
        Compare a fixed 12% SIP with a scenario where yearly returns vary
        within your chosen range.
      </p>

      {/* FORM CARD */}
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur rounded-3xl border border-emerald-200 p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* SIP Amount */}
          <div className="flex flex-col">
            <label className="font-semibold text-emerald-900 mb-2">
              Enter SIP amount
            </label>
            <input
              type="number"
              value={sipAmount}
              onChange={(e) => setSipAmount(e.target.value)}
              placeholder="Monthly Amount in Rs."
              className="rounded-xl border border-emerald-200 px-4 py-3"
            />
          </div>

          {/* Min Rate */}
          <div className="flex flex-col">
            <label className="font-semibold text-emerald-900 mb-2">
              From (%)
            </label>
            <input
              type="number"
              value={minRate}
              onChange={(e) => setMinRate(e.target.value)}
              placeholder="e.g. 10"
              className="rounded-xl border border-emerald-200 px-4 py-3"
            />
          </div>

          {/* Max Rate */}
          <div className="flex flex-col">
            <label className="font-semibold text-emerald-900 mb-2">
              To (%)
            </label>
            <input
              type="number"
              value={maxRate}
              onChange={(e) => setMaxRate(e.target.value)}
              placeholder="e.g. 14"
              className="rounded-xl border border-emerald-200 px-4 py-3"
            />
          </div>

          {/* Tenure */}
          <div className="flex flex-col">
            <label className="font-semibold text-emerald-900 mb-2">
              Tenure
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Tenure in Years"
              className="rounded-xl border border-emerald-200 px-4 py-3"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6">
          <button
            onClick={calculateRange}
            className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition"
          >
            Calculate Corpus amount
          </button>

          <button
            onClick={reset}
            className="px-8 py-4 border border-emerald-600 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* OUTPUT: 2 CHARTS + SUMMARY IN 3D CARDS */}
      {summary && combinedData.length > 0 && (
        <section className="mt-24 grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
          {/* Fixed vs variable chart */}
          <CardContainer containerClassName="py-10 xl:col-span-2">
            <CardBody className="bg-white/70 rounded-2xl p-6 border border-emerald-200 shadow-sm w-full">
              <CardItem translateZ={40}>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">
                  Fixed 12% vs Variable Returns
                </h3>
              </CardItem>
              <CardItem translateZ={30} className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={combinedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="fixed"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                      name="Fixed 12%"
                    />
                    <Line
                      type="monotone"
                      dataKey="variable"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      dot={false}
                      name="Variable (range)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Summary card */}
          <CardContainer containerClassName="py-10">
            <CardBody className="bg-white/70 rounded-2xl p-8 border border-emerald-200 shadow-sm max-w-xl w-full mx-auto">
              <CardItem translateZ={40}>
                <h3 className="text-3xl font-bold text-emerald-900 mb-5 text-center">
                  SIP Range Summary
                </h3>
              </CardItem>

              <CardItem translateZ={30}>
                <div className="space-y-4 text-emerald-800 text-lg">
                  <p>
                    Amount invested till end of tenure:{" "}
                    <b>{formatCurrency(summary.amount_invested)}</b>
                  </p>
                  <p>
                    Expected yearly rate of return range:{" "}
                    <b>
                      {summary.min_rate}% - {summary.max_rate}%
                    </b>
                  </p>
                  <p>
                    Corpus with fixed 12%:{" "}
                    <b>{formatCurrency(summary.fixed_corpus)}</b>
                  </p>
                  <p>
                    Corpus with variable returns:{" "}
                    <b>{formatCurrency(summary.variable_corpus)}</b>
                  </p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </section>
      )}
    </section>
  );
}


