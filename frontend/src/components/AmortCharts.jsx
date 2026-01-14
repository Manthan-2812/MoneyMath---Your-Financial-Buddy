import { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

// Pie colors: Interest → emerald, Principal → blue
const PIE_COLORS = {
  Principal: "#0ea5e9", // blue
  Interest: "#10b981", // emerald
};

export default function AmortCharts({ schedule }) {
  if (!schedule || schedule.length === 0) return null;

  const chartData = useMemo(
    () =>
      schedule.map((row) => ({
        year: row.year,
        principal: row.total_principal,
        interest: row.total_interest,
      })),
    [schedule]
  );

  const pieData = useMemo(() => {
    const totalPrincipal = schedule.reduce(
      (sum, row) => sum + row.total_principal,
      0
    );
    const totalInterest = schedule.reduce(
      (sum, row) => sum + row.total_interest,
      0
    );

    return [
      { name: "Principal", value: totalPrincipal },
      { name: "Interest", value: totalInterest },
    ];
  }, [schedule]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Line / Area chart card */}
      <CardContainer containerClassName="py-10">
        <CardBody className="bg-white/70 rounded-2xl p-6 border border-emerald-200 shadow-sm w-full">
          <CardItem translateZ={40}>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">
              Principal vs Interest Over Time
            </h3>
          </CardItem>
          <CardItem translateZ={30} className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="principal"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                  name="Principal"
                />
                <Line
                  type="monotone"
                  dataKey="interest"
                  stroke="#047857"
                  strokeWidth={2}
                  dot={false}
                  name="Interest"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardItem>
        </CardBody>
      </CardContainer>

      {/* Pie chart card */}
      <CardContainer containerClassName="py-10">
        <CardBody className="bg-white/70 rounded-2xl p-6 border border-emerald-200 shadow-sm w-full">
          <CardItem translateZ={40}>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">
              Principal vs Interest (Total)
            </h3>
          </CardItem>
          <CardItem translateZ={30} className="w-full h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  dataKey="value"
                  nameKey="name"
                >
                  {pieData.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={PIE_COLORS[entry.name] || "#10b981"}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
