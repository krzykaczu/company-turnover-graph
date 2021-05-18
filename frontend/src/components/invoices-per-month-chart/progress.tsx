import type { FunctionComponent } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { MONTHS } from "../dashboard/helpers";

export interface InvoicesPerMonthChartData {
  index: number;
  month: typeof MONTHS[number];
  sumOfInvoices: number;
}

export const InvoicesPerMonthChart: FunctionComponent<{
  data: InvoicesPerMonthChartData[];
}> = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["0", "1", "2", "3", "4", "sumOfInvoices"]}
    indexBy="month"
    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
