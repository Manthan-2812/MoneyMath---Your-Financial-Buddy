import { formatCurrency } from "@/lib/utils";

export default function AmortTable({ schedule }) {
  if (!schedule || schedule.length === 0) return null;

  return (
    <div className="mt-20 overflow-x-auto rounded-2xl border border-emerald-200">
      <table className="min-w-full bg-white">
        <thead className="sticky top-0 bg-emerald-600 text-white">
          <tr>
            <th className="px-4 py-3">Year</th>
            <th className="px-4 py-3">Starting Balance</th>
            <th className="px-4 py-3">Total Principal</th>
            <th className="px-4 py-3">Total Interest</th>
            <th className="px-4 py-3">Yearly EMI</th>
            <th className="px-4 py-3">Ending Balance</th>
          </tr>
        </thead>

        <tbody>
          {schedule.map((row, idx) => (
            <tr key={idx} className="text-center border-t">
              <td className="px-4 py-2">{row.year}</td>
              <td className="px-4 py-2">{formatCurrency(row.starting_balance)}</td>
              <td className="px-4 py-2">{formatCurrency(row.total_principal)}</td>
              <td className="px-4 py-2">{formatCurrency(row.total_interest)}</td>
              <td className="px-4 py-2">{formatCurrency(row.yearly_emi)}</td>
              <td className="px-4 py-2">{formatCurrency(row.ending_balance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
