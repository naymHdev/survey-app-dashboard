import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const educationData = [
  { name: "Graduate degree or higher", value: 40 },
  { name: "Bachelor’s degree", value: 50 },
  { name: "Some college", value: 70 },
  { name: "High school graduate", value: 60 },
  { name: "Some high school", value: 80 },
];

const colors = ["#9b5de5", "#00bb72", "#f4a261", "#f6bd60", "#ef476f"];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function EducationCompletedChart() {
  return (
    <Card
      className="flex flex-col items-center justify-center p-4 lg:p-6"
      style={{ width: "100%", height: 500 }}
    >
      <h2 className="text-lg font-semibold text-center">
        2. What is your highest level of education completed?
      </h2>

      <ResponsiveContainer width="100%" height={"100%"}>
        <BarChart
          data={educationData}
          margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11 }}
            interval={0}
            angle={-20}
            textAnchor="end"
            height={60}
          />
          <YAxis />
          <Bar
            dataKey="value"
            shape={<TriangleBar />}
            label={{ position: "top", fontSize: 12 }}
          >
            {educationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className=" flex flex-wrap items-center justify-center text-center gap-2">
        {educationData.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <span
              className="w-4 h-4 rounded-md"
              style={{ backgroundColor: colors[index] }}
            />
            <span>
              {entry.name} – ({entry.value}%)
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
