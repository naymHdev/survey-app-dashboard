import { Card } from "@/components/ui/card";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { name: "Student", value: 50 },
  { name: "Unemployed", value: 70 },
  { name: "Employed part-time", value: 60 },
  { name: "Employed full-time", value: 80 },
];

const COLORS = ["#9b5de5", "#00bb72", "#c76c33", "#ffd166"];

const EmploymentStatus = () => {
  return (
    <Card className="w-full p-4 lg:p-6" style={{ width: "100%", height: 500 }}>
      <h2 className="text-lg font-semibold text-center">
        3. What is your employment status?
      </h2>

      <div style={{ width: "100%", height: 380 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
            <XAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(v) => `${v}%`}
            />
            <YAxis dataKey="name" type="category" />
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Bar dataKey="value" radius={[0, 10, 10, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Info (Legend) */}
      <div className=" flex flex-wrap items-center justify-center text-center gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-md"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span className="text-sm text-gray-800">
              {item.name} – ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default EmploymentStatus;
