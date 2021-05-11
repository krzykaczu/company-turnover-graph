import { Bubble, Props } from "./bubble";
import type { Story } from "@storybook/react";
import mocks from "./mocks";
const { data, size } = mocks;

export default {
  component: Bubble,
  title: "Bubble",
};

const Template: Story<Props> = (args) => <Bubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
  size,
};
