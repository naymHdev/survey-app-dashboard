"use client";

import { Card } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type MaritalData = {
  status: string;
  percentage: number;
  fill: string;
};

const data: MaritalData[] = [
  { status: "Widowed", percentage: 50, fill: "#9b5de5" },
  { status: "Divorced", percentage: 70, fill: "#00bb72" },
  { status: "Married", percentage: 60, fill: "#c76c33" },
  { status: "Single", percentage: 80, fill: "#ffd166" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function MaritalStatus() {
  return (
    <Card
      className="w-full flex flex-col items-center"
      style={{ width: "100%", height: 500 }}
    >
      <h2 className=" text-lg font-semibold text-sc-charcoal-logic text-center">
        6. What is your marital status?
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="percentage"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={140}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className=" flex flex-wrap items-center justify-center text-center gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-md"
              style={{ backgroundColor: item.fill }}
            ></span>
            <span className="text-sm text-gray-800">
              {item.status} – ({item.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
