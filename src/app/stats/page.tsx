"use client";

import { StatNode } from "@/components/stats/node";
import { Fragment } from "react";

const StatsPage = () => {
  return (
    <main className="relative flex flex-col gap-2 px-4 mt-4">
      {data.map((node) => (
        <Fragment key={node.name}>
          <StatNode {...node} />
          <div className="w-full h-[1px] bg-border last:hidden" />
        </Fragment>
      ))}
    </main>
  );
};

export default StatsPage;

const data = [
  {
    name: "burrow-1",
    ip: "100.118.169.8",
    stats: {
      resource: [
        { label: "cpu", value: 0.3 },
        { label: "ram", value: 0.5 },
        { label: "disk", value: 0.05 },
      ],
      network: [
        { time: 1, in: 4.5, out: 30.2 },
        { time: 2, in: 12.2, out: 28.2 },
        { time: 3, in: 8.7, out: 35.6 },
        { time: 4, in: 15.3, out: 25.1 },
        { time: 5, in: 6.2, out: 32.8 },
        { time: 6, in: 18.9, out: 22.4 },
        { time: 7, in: 11.4, out: 29.7 },
        { time: 8, in: 22.5, out: 18.9 },
        { time: 9, in: 9.6, out: 31.2 },
        { time: 10, in: 14.8, out: 26.5 },
        { time: 11, in: 7.3, out: 33.1 },
        { time: 12, in: 19.7, out: 21.3 },
        { time: 13, in: 13.2, out: 27.8 },
        { time: 14, in: 25.1, out: 17.6 },
        { time: 15, in: 10.9, out: 30.4 },
      ],
      temperature: [
        { time: 1, in: 4.5, out: 30.2 },
        { time: 2, in: 12.2, out: 28.2 },
        { time: 3, in: 8.7, out: 35.6 },
        { time: 4, in: 15.3, out: 25.1 },
        { time: 5, in: 6.2, out: 32.8 },
        { time: 6, in: 18.9, out: 22.4 },
        { time: 7, in: 11.4, out: 29.7 },
        { time: 8, in: 22.5, out: 18.9 },
        { time: 9, in: 9.6, out: 31.2 },
        { time: 10, in: 14.8, out: 26.5 },
        { time: 11, in: 7.3, out: 33.1 },
        { time: 12, in: 19.7, out: 21.3 },
        { time: 13, in: 13.2, out: 27.8 },
        { time: 14, in: 25.1, out: 17.6 },
        { time: 15, in: 10.9, out: 30.4 },
      ],
    },
  },
  {
    name: "burrow-2",
    ip: "100.124.205.34",
    stats: {
      resource: [
        { label: "cpu", value: 0.5 },
        { label: "ram", value: 0.4 },
        { label: "disk", value: 0.1 },
      ],
      network: [
        { time: 1, in: 45.2, out: 8.3 },
        { time: 2, in: 52.7, out: 12.1 },
        { time: 3, in: 38.9, out: 6.4 },
        { time: 4, in: 61.3, out: 15.8 },
        { time: 5, in: 42.1, out: 9.7 },
        { time: 6, in: 55.6, out: 18.2 },
        { time: 7, in: 48.3, out: 11.5 },
        { time: 8, in: 67.2, out: 22.4 },
        { time: 9, in: 41.8, out: 7.9 },
        { time: 10, in: 59.4, out: 16.3 },
        { time: 11, in: 46.7, out: 10.2 },
        { time: 12, in: 63.1, out: 19.5 },
        { time: 13, in: 39.5, out: 8.6 },
        { time: 14, in: 71.2, out: 24.8 },
        { time: 15, in: 50.3, out: 13.1 },
      ],
      temperature: [
        { time: 1, in: 45.2, out: 8.3 },
        { time: 2, in: 52.7, out: 12.1 },
        { time: 3, in: 38.9, out: 6.4 },
        { time: 4, in: 61.3, out: 15.8 },
        { time: 5, in: 42.1, out: 9.7 },
        { time: 6, in: 55.6, out: 18.2 },
        { time: 7, in: 48.3, out: 11.5 },
        { time: 8, in: 67.2, out: 22.4 },
        { time: 9, in: 41.8, out: 7.9 },
        { time: 10, in: 59.4, out: 16.3 },
        { time: 11, in: 46.7, out: 10.2 },
        { time: 12, in: 63.1, out: 19.5 },
        { time: 13, in: 39.5, out: 8.6 },
        { time: 14, in: 71.2, out: 24.8 },
        { time: 15, in: 50.3, out: 13.1 },
      ],
    },
  },
  {
    name: "burrow-3",
    ip: "100.124.205.35",
    stats: {
      resource: [
        { label: "cpu", value: 0.2 },
        { label: "ram", value: 0.3 },
        { label: "disk", value: 0.2 },
      ],
      network: [
        { time: 1, in: 2.1, out: 5.3 },
        { time: 2, in: 3.4, out: 6.8 },
        { time: 3, in: 1.8, out: 4.2 },
        { time: 4, in: 5.2, out: 9.1 },
        { time: 5, in: 2.9, out: 5.7 },
        { time: 6, in: 4.6, out: 8.3 },
        { time: 7, in: 1.9, out: 4.5 },
        { time: 8, in: 6.3, out: 11.2 },
        { time: 9, in: 2.7, out: 5.4 },
        { time: 10, in: 4.1, out: 7.9 },
        { time: 11, in: 1.6, out: 3.8 },
        { time: 12, in: 5.8, out: 10.1 },
        { time: 13, in: 3.2, out: 6.5 },
        { time: 14, in: 7.1, out: 12.4 },
        { time: 15, in: 2.4, out: 4.9 },
      ],
      temperature: [
        { time: 1, in: 2.1, out: 5.3 },
        { time: 2, in: 3.4, out: 6.8 },
        { time: 3, in: 1.8, out: 4.2 },
        { time: 4, in: 5.2, out: 9.1 },
        { time: 5, in: 2.9, out: 5.7 },
        { time: 6, in: 4.6, out: 8.3 },
        { time: 7, in: 1.9, out: 4.5 },
        { time: 8, in: 6.3, out: 11.2 },
        { time: 9, in: 2.7, out: 5.4 },
        { time: 10, in: 4.1, out: 7.9 },
        { time: 11, in: 1.6, out: 3.8 },
        { time: 12, in: 5.8, out: 10.1 },
        { time: 13, in: 3.2, out: 6.5 },
        { time: 14, in: 7.1, out: 12.4 },
        { time: 15, in: 2.4, out: 4.9 },
      ],
    },
  },
];
