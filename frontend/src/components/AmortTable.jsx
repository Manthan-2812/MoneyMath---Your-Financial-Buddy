import { formatCurrency } from "@/lib/utils";

export default function AmortTable({ schedule }) {
  if (!schedule || schedule.length === 0) return null;

  return (
    <div className="mt-20 rounded-2xl border border-emerald-200 overflow-hidden flex flex-col" style={{ height: '600px' }}>
      {/* Header Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <colgroup>
            <col className="w-16" />
            <col className="w-48" />
            <col className="w-48" />
            <col className="w-48" />
            <col className="w-48" />
            <col className="w-48" />
          </colgroup>
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Year</th>
              <th className="px-4 py-3 text-left">Starting Balance</th>
              <th className="px-4 py-3 text-left">Total Principal</th>
              <th className="px-4 py-3 text-left">Total Interest</th>
              <th className="px-4 py-3 text-left">Yearly EMI</th>
              <th className="px-4 py-3 text-left">Ending Balance</th>
            </tr>
          </thead>
        </table>
      </div>
      
      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto">
        <table className="min-w-full bg-white">
          <colgroup>
            <col className="w-16" />
            <col className="w-48" />
            <col className="w-48" />
            <col className="w-48" />
            <col className="w-48" />
            <col className="w-48" />
          </colgroup>
          <tbody>
            {schedule.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-emerald-50'}>
                <td className="px-4 py-3 border-t border-emerald-100 text-left">{row.year}</td>
                <td className="px-4 py-3 border-t border-emerald-100 text-left">{formatCurrency(row.starting_balance)}</td>
                <td className="px-4 py-3 border-t border-emerald-100 text-left">{formatCurrency(row.total_principal)}</td>
                <td className="px-4 py-3 border-t border-emerald-100 text-left">{formatCurrency(row.total_interest)}</td>
                <td className="px-4 py-3 border-t border-emerald-100 text-left">{formatCurrency(row.yearly_emi)}</td>
                <td className="px-4 py-3 border-t border-emerald-100 text-left">{formatCurrency(row.ending_balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
