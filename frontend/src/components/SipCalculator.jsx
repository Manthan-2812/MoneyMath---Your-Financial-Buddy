import { useState } from "react";
import SipSummary from "./SipSummary";
import SipChart from "./SipChart";
const BASE_URL = "https://moneymath-your-financial-buddy.onrender.com";

export default function SipCalculator() {
  const [sipAmount, setSipAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [years, setYears] = useState("");

  const [summary, setSummary] = useState(null);
  const [balances, setBalances] = useState([]);

  const calculateSip = async () => {
    if (!sipAmount || !annualRate || !years) return;

    const response = await fetch(`${BASE_URL}/sip`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sip_amount: Number(sipAmount),
        annual_rate: Number(annualRate),
        years: Number(years),
      }),
    });

    const data = await response.json();
    setSummary(data.summary);
    setBalances(data.yearly_balances);
  };

  const reset = () => {
    setSipAmount("");
    setAnnualRate("");
    setYears("");
    setSummary(null);
    setBalances([]);
  };

  return (
    <section
      id="sip"
      className="relative pt-32 pb-32 px-6 scroll-mt-50 max-w-screen-xl mx-auto"
    >
      <h2 className="text-4xl md:text-7xl font-bold text-emerald-900 text-center mb-6">
        SIP Calculator
      </h2>

      <p className="text-lg md:text-xl font-semibold text-emerald-800 text-center max-w-3xl mx-auto mb-20">
        Estimate how your monthly SIP can grow into a long-term corpus with a
        constant yearly rate of return.
      </p>

      {/* FORM CARD */}
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur rounded-3xl border border-emerald-200 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          {/* Yearly Rate */}
          <div className="flex flex-col">
            <label className="font-semibold text-emerald-900 mb-2">
              Yearly Rate of Return
            </label>
            <input
              type="number"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              placeholder="Constant rate of return in %"
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
              placeholder="Enter Tenure in Years"
              className="rounded-xl border border-emerald-200 px-4 py-3"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6">
          <button
            onClick={calculateSip}
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

      {/* OUTPUT: SUMMARY + CHART IN ONE ROW */}
      {summary && balances.length > 0 && (
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <SipSummary summary={summary} />
          <SipChart balances={balances} title="Corpus Growth Over Years" />
        </section>
      )}
    </section>
  );
}


