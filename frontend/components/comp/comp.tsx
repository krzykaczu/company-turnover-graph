import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const Comp = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "compared", "sandwich", "kebab", "fries", "other"]}
    indexBy="country"
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

export const compData = [
  {
    country: "ASTER",
    other: 113,
  },
  {
    country: "BLUESTATION",
    other: 184,
  },
  {
    country: "BENGT",
    compared: 156,
  },
  {
    country: "ARCTICAL",
    other: 70,
  },
  {
    country: "MIND",
    other: 42,
  },
  {
    country: "TWOROOMS",
    other: 41,
  },
  {
    country: "WOJTEK",
    other: 194,
  },
];
