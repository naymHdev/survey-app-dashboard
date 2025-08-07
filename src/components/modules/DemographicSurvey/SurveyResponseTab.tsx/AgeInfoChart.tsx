import { Card } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type TooltipPayload = ReadonlyArray<any>;

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
  tooltipPayload?: ReadonlyArray<TooltipPayload>;
};

type GeometrySector = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
};

type PieLabelProps = PieSectorData &
  GeometrySector & {
    tooltipPayload?: any;
  };

const data = [
  { name: "18–24", value: 25 },
  { name: "25–34", value: 35 },
  { name: "35–44", value: 25 },
  { name: "44+", value: 15 },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#9b5de5", "#00bb72", "#c76c33", "#ffd166"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function AgeInfoChart() {
  return (
    <Card
      className=" flex flex-col items-center justify-center p-4 lg:p-6"
      style={{ width: "100%", height: 500 }}
    >
      <h2 className=" text-lg font-semibold text-sc-charcoal-logic text-center">
        1. What is your age?
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
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
}
