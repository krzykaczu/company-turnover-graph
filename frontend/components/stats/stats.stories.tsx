import { Stats, StatsProps } from "./stats";

export default {
  component: Stats,
  title: "Stats",
};

const Template = (args: StatsProps) => <Stats {...args} />;

export const Default = Template.bind({});
Default.args = {
  turnover: 100000,
  rank: 2,
};
