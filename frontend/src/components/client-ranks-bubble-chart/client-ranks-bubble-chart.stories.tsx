import { ClientRanksBubbleChart, Props } from "./client-ranks-bubble-chart";
import type { Story } from "@storybook/react";
import mocks from "./mocks";
const { data, size } = mocks;

export default {
  component: ClientRanksBubbleChart,
  title: "Bubble",
};

const Template: Story<Props> = (args) => <ClientRanksBubbleChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
  size,
};
