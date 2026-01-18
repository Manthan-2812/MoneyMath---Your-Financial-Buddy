import { useMemo } from "react";
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

// Format large numbers to Cr/Lakhs format for Y-axis
const formatYAxis = (tick) => {
  if (tick >= 10000000) {
    return `${(tick / 10000000).toFixed(1)} Cr`;
  } else if (tick >= 100000) {
    return `${(tick / 100000).toFixed(1)} L`;
  } else if (tick >= 1000) {
    return `${(tick / 1000).toFixed(1)}K`;
  }
  return tick;
};

export default function SipChart({ balances, title = "SIP Growth Over Time" }) {
  const data = useMemo(() => balances || [], [balances]);

  if (!data || data.length === 0) return null;

  return (
    <CardContainer containerClassName="py-10">
      <CardBody className="bg-white/70 rounded-2xl p-6 border border-emerald-200 shadow-sm w-full">
        <CardItem translateZ={40}>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">
            {title}
          </h3>
        </CardItem>
        <CardItem translateZ={30} className="w-full h-96 overflow-hidden">
          <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%" className="-mt-6 -ml-4">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
              <XAxis dataKey="year" />
              <YAxis 
                width={80}
                tickFormatter={formatYAxis}
                domain={[0, (dataMax) => Math.max(1, Math.ceil(dataMax * 1.1))]}
              />
              <Tooltip 
                formatter={(value) => {
                  const num = Number(value);
                  if (num >= 10000000) {
                    return `₹${(num / 10000000).toFixed(2)} Cr`;
                  } else if (num >= 100000) {
                    return `₹${(num / 100000).toFixed(2)} L`;
                  } else if (num >= 1000) {
                    return `₹${(num / 1000).toFixed(2)}K`;
                  }
                  return `₹${num}`;
                }}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
                name="Portfolio value"
              />
            </LineChart>
            </ResponsiveContainer>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


