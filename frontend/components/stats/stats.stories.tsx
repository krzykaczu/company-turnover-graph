import { Stats, StatsProps } from "./stats";

export default {
  component: Stats,
  title: "Stats",
  decorators: [
    (Story) => (
      <div style={{ display: "flex", width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: StatsProps) => <Stats {...args} />;

export const Default = Template.bind({});
Default.args = {
  turnover: 100000,
  rank: 2,
};
