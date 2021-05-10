import type { FunctionComponent } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useRouter } from "next/router";
import {
  comp, // @ts-ignore
} from "./comp.module.scss";

export type CompData = (
  | { client: string; other: number }
  | { client: string; compared: number }
)[];

export const Comp: FunctionComponent<{
  data: CompData;
}> = ({ data }) => {
  const router = useRouter();
  return (
    <div className={comp}>
      <ResponsiveBar
        data={data}
        keys={["1", "compared", "3", "4", "5", "other"]}
        indexBy="client"
        margin={{ top: 50, right: 50, bottom: 50, left: 100 }}
        padding={0.3}
        layout="horizontal"
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
        onClick={(data) => {
          router.push(`/${data.data.client}`);
        }}
      />
    </div>
  );
};
