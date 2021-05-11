import { Card } from "./card";
import type { Story } from "@storybook/react";

export default {
  component: Card,
  title: "Card",
};

const Template: Story<{ children: JSX.Element; className: string }> = (
  args
) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>dupa</div>,
  className: "",
};
