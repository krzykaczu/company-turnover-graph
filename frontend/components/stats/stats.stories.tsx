import { Stats, StatsProps } from "./stats";
import type { Story } from "@storybook/react";

export default {
  component: Stats,
  title: "Stats",
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ display: "flex", width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: StatsProps): JSX.Element => <Stats {...args} />;

export const Default = Template.bind({});
Default.args = {
  turnover: 100000,
  rank: 2,
};
