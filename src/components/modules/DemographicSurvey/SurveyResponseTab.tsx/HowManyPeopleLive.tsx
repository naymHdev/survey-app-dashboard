"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "1", value: 10 },
  { name: "2", value: 50 },
  { name: "3", value: 70 },
  { name: "4", value: 60 },
  { name: "5", value: 80 },
];

const COLORS = ["#8884d8", "#00C49F", "#FFBB28", "#FF8042", "#A28BD4"];

const HowManyPeopleLive = () => {
  return (
    <Card className="w-full p-4 lg:p-6" style={{ width: "100%", height: 500 }}>
      <h2 className=" text-lg font-semibold text-sc-charcoal-logic text-center">
        5. How many people live in your household?
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Custom Legend Below Chart */}
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

export default HowManyPeopleLive;
