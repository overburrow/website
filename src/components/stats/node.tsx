"use client";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";

type StatNodeProps = {
  name: string;
  ip: string;
  stats: {
    resource: { label: string; value: number }[];
    network: { time: number; in: number; out: number }[];
    temperature: { time: number; in: number; out: number }[];
  };
};

export const StatNode = ({ name, ip, stats }: StatNodeProps) => {
  return (
    <div className="h-12 flex gap-4 *:not-last:pr-4 *:not-last:border-r *:flex-1">
      <div className="flex flex-col justify-center gap-1 max-w-40">
        <h3 className="text leading-none">{name}</h3>
        <p className="text-muted-foreground text-sm">{ip}</p>
      </div>

      <ChartContainer config={resourceChartConfig} className="h-full">
        <BarChart
          accessibilityLayer
          data={stats.resource}
          margin={{ top: 8, bottom: 8, left: 0, right: 0 }}
          barSize={6}
          layout="vertical"
        >
          <YAxis dataKey="label" type="category" hide />
          <XAxis type="number" hide />
          <Bar dataKey="value" fill="var(--color-foreground)" />
        </BarChart>
      </ChartContainer>

      <ChartContainer config={networkChartConfig} className="h-full">
        <LineChart
          accessibilityLayer
          data={stats.network}
          margin={{ top: 8, bottom: 8, left: 0, right: 0 }}
        >
          <XAxis dataKey="time" type="number" hide />
          <YAxis type="number" hide />
          <Line
            dataKey="in"
            type="natural"
            dot={false}
            stroke="var(--color-foreground)"
          />
          <Line
            dataKey="out"
            type="natural"
            dot={false}
            stroke="var(--color-muted-foreground)"
          />
        </LineChart>
      </ChartContainer>

      <ChartContainer config={networkChartConfig} className="h-full">
        <LineChart
          accessibilityLayer
          data={stats.network}
          margin={{ top: 8, bottom: 8, left: 0, right: 0 }}
        >
          <XAxis dataKey="time" type="number" hide />
          <YAxis type="number" hide />
          <Line
            dataKey="in"
            type="natural"
            dot={false}
            stroke="var(--color-foreground)"
          />
          <Line
            dataKey="out"
            type="natural"
            dot={false}
            stroke="var(--color-muted-foreground)"
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

const resourceChartConfig = {
  cpu: {
    label: "cpu",
  },
  ram: {
    label: "ram",
  },
  disk: {
    label: "disk",
  },
} satisfies ChartConfig;

const networkChartConfig = {
  in: {
    label: "in",
  },
  out: {
    label: "out",
  },
};
