import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const Progress = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["0", "1", "2", "3", "4", "invoice"]}
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
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
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

export const progressData = [
  {
    month: "jan",
    invoice: 99,
  },
  {
    month: "feb",
    invoice: 0,
  },
  {
    month: "mar",
    invoice: 148,
  },
  {
    month: "apr",
    invoice: 194,
  },
  {
    month: "may",
    invoice: 0,
  },
  {
    month: "jun",
    invoice: 41,
  },
  {
    month: "jul",
    invoice: 54,
  },
  {
    month: "aug",
    invoice: 54,
  },
  {
    month: "sep",
    invoice: 0,
  },
  {
    month: "oct",
    invoice: 0,
  },
  {
    month: "nov",
    invoice: 54,
  },
  {
    month: "dec",
    invoice: 0,
  },
];
