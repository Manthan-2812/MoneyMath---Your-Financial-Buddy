import { formatCurrency } from "@/lib/utils";

export default function AmortTable({ schedule }) {
  if (!schedule || schedule.length === 0) return null;

  return (
    <div className="mt-20 rounded-2xl border border-emerald-200 overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 200px)' }}>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="px-4 py-3 sticky top-0 bg-emerald-600 z-10">Year</th>
              <th className="px-4 py-3 sticky top-0 bg-emerald-600 z-10">Starting Balance</th>
              <th className="px-4 py-3 sticky top-0 bg-emerald-600 z-10">Total Principal</th>
              <th className="px-4 py-3 sticky top-0 bg-emerald-600 z-10">Total Interest</th>
              <th className="px-4 py-3 sticky top-0 bg-emerald-600 z-10">Yearly EMI</th>
              <th className="px-4 py-3 sticky top-0 bg-emerald-600 z-10">Ending Balance</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="flex-1 overflow-y-auto">
        <table className="min-w-full bg-white">
          <tbody>
            {schedule.map((row, idx) => (
              <tr key={idx} className={`text-center ${idx % 2 === 0 ? 'bg-white' : 'bg-emerald-50'}`}>
                <td className="px-4 py-3 border-t border-emerald-100">{row.year}</td>
                <td className="px-4 py-3 border-t border-emerald-100">{formatCurrency(row.starting_balance)}</td>
                <td className="px-4 py-3 border-t border-emerald-100">{formatCurrency(row.total_principal)}</td>
                <td className="px-4 py-3 border-t border-emerald-100">{formatCurrency(row.total_interest)}</td>
                <td className="px-4 py-3 border-t border-emerald-100">{formatCurrency(row.yearly_emi)}</td>
                <td className="px-4 py-3 border-t border-emerald-100">{formatCurrency(row.ending_balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
