import Loader from "./loader";
import type { Story } from "@storybook/react";

export default {
  component: Loader,
  title: "Loader",
};

const Template: Story = () => <Loader />;

export const Default = Template.bind({});
