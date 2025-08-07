"use client";

import { TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const incomeData = [
  { label: "Prefer not to say", value: 42 },
  { label: "$100,000 or more", value: 42 },
  { label: "$75,000 – $99,999", value: 42 },
  { label: "$50,000 – $74,999", value: 42 },
  { label: "$25,000 – $49,999", value: 42 },
  { label: "Less than $25,000", value: 42 },
];

const COLORS = [
  "#9b5de5", // Purple
  "#00bb72", // Green
  "#c76c33", // Brown
  "#ffd166", // Yellow
  "#4cc9f0", // Blue
  "#f72585", // Pink
];

export function HouseholdIncome() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="text-center">
        <CardTitle className="text-lg font-semibold text-center">
          4. What is your approximate annual household income?
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center">
        <ResponsiveContainer width={"100%"} height={200}>
          <PieChart>
            <Pie
              data={incomeData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
            >
              {incomeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{ fontSize: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>

      {/* Legend Below the Chart */}
         <div className=" flex flex-wrap items-center justify-center text-center gap-2">
        {incomeData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-md"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span className="text-muted-foreground">
              {item.label} – ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
