"use client";

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { month: "Jan", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Feb", player: 12, teamManager: 40, venueOwner: 8 },
  { month: "Mar", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Apr", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "May", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Jun", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Jul", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Aug", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Sep", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Oct", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Nov", player: 15, teamManager: 22, venueOwner: 18 },
  { month: "Dec", player: 20, teamManager: 15, venueOwner: 25 },
];

const chartConfig = {
  venueOwner: {
    label: "Venue Owner",
    color: "#10b981",
  },
  player: {
    label: "Player",
    color: "#06b6d4",
  },
  teamManager: {
    label: "Team Manager",
    color: "#3b82f6",
  },
};

export default function UserManagementChart() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <CardTitle className="text-xl font-semibold text-ns-title">
          User Management
        </CardTitle>
        <Select defaultValue="2024">
          <SelectTrigger className=" py-5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#06b6d4]"></div>
            <span className="text-sm">Player</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#3b82f6]"></div>
            <span className="text-sm">Team Manager</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#10b981]"></div>
            <span className="text-sm">Venue Owner</span>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                domain={[0, 60]}
                ticks={[0, 15, 35, 50]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="venueOwner"
                stackId="a"
                fill="var(--color-venueOwner)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="player"
                stackId="a"
                fill="var(--color-player)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="teamManager"
                stackId="a"
                fill="var(--color-teamManager)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
