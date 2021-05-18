import type { FunctionComponent, Dispatch, SetStateAction } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useRouter } from "next/router";
import {
  clientRanksChart, // @ts-ignore
} from "./client-ranks-chart.module.scss";

export type ClientRanksChartData = (
  | { client: string; other: number }
  | { client: string; compared: number }
)[];

export const ClientRanksChart: FunctionComponent<{
  data: ClientRanksChartData;
  setHoveredCustomer?: Dispatch<SetStateAction<string>>;
}> = ({ data, setHoveredCustomer = () => "" }) => {
  const router = useRouter();
  return (
    <div className={clientRanksChart}>
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
        isInteractive={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={false}
        motionStiffness={90}
        motionDamping={15}
        onClick={(data) => {
          router.push(`/${data.data.client}`);
        }}
        onMouseEnter={(_data, event) => {
          setHoveredCustomer(String(_data.data.client));
          (event.target as SVGRectElement).style.fill = "#f47560";
        }}
        onMouseLeave={(_data, event) => {
          if (_data.id !== "compared") {
            setHoveredCustomer("");
            (event.target as SVGRectElement).style.fill = "#97e3d5";
          }
        }}
      />
    </div>
  );
};
