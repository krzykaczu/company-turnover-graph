import { Comp, CompData } from "./comp";
import type { Story } from "@storybook/react";

export default {
  component: Comp,
  title: "Comp",
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<{ data: CompData }> = (args) => <Comp {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { client: "X", other: 1 },
    { client: "Y", compared: 10 },
  ],
};
