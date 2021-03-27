import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export const data = [
  {
    country: "AD",
    "hot dog": 81,
    "hot dogColor": "hsl(153, 70%, 50%)",
    burger: 113,
    burgerColor: "hsl(251, 70%, 50%)",
    sandwich: 92,
    sandwichColor: "hsl(0, 70%, 50%)",
    kebab: 26,
    kebabColor: "hsl(215, 70%, 50%)",
    fries: 130,
    friesColor: "hsl(310, 70%, 50%)",
    donut: 99,
    donutColor: "hsl(56, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 160,
    "hot dogColor": "hsl(3, 70%, 50%)",
    burger: 184,
    burgerColor: "hsl(98, 70%, 50%)",
    sandwich: 0,
    sandwichColor: "hsl(171, 70%, 50%)",
    kebab: 118,
    kebabColor: "hsl(64, 70%, 50%)",
    fries: 159,
    friesColor: "hsl(209, 70%, 50%)",
    donut: 57,
    donutColor: "hsl(356, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 199,
    "hot dogColor": "hsl(253, 70%, 50%)",
    burger: 156,
    burgerColor: "hsl(323, 70%, 50%)",
    sandwich: 112,
    sandwichColor: "hsl(246, 70%, 50%)",
    kebab: 6,
    kebabColor: "hsl(206, 70%, 50%)",
    fries: 171,
    friesColor: "hsl(319, 70%, 50%)",
    donut: 148,
    donutColor: "hsl(307, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 143,
    "hot dogColor": "hsl(37, 70%, 50%)",
    burger: 70,
    burgerColor: "hsl(2, 70%, 50%)",
    sandwich: 26,
    sandwichColor: "hsl(236, 70%, 50%)",
    kebab: 32,
    kebabColor: "hsl(306, 70%, 50%)",
    fries: 93,
    friesColor: "hsl(157, 70%, 50%)",
    donut: 194,
    donutColor: "hsl(20, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 152,
    "hot dogColor": "hsl(249, 70%, 50%)",
    burger: 42,
    burgerColor: "hsl(46, 70%, 50%)",
    sandwich: 145,
    sandwichColor: "hsl(43, 70%, 50%)",
    kebab: 7,
    kebabColor: "hsl(113, 70%, 50%)",
    fries: 8,
    friesColor: "hsl(97, 70%, 50%)",
    donut: 90,
    donutColor: "hsl(42, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 132,
    "hot dogColor": "hsl(302, 70%, 50%)",
    burger: 147,
    burgerColor: "hsl(20, 70%, 50%)",
    sandwich: 189,
    sandwichColor: "hsl(148, 70%, 50%)",
    kebab: 83,
    kebabColor: "hsl(202, 70%, 50%)",
    fries: 2,
    friesColor: "hsl(111, 70%, 50%)",
    donut: 41,
    donutColor: "hsl(53, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 162,
    "hot dogColor": "hsl(42, 70%, 50%)",
    burger: 194,
    burgerColor: "hsl(328, 70%, 50%)",
    sandwich: 137,
    sandwichColor: "hsl(285, 70%, 50%)",
    kebab: 192,
    kebabColor: "hsl(311, 70%, 50%)",
    fries: 116,
    friesColor: "hsl(266, 70%, 50%)",
    donut: 54,
    donutColor: "hsl(71, 70%, 50%)",
  },
];
