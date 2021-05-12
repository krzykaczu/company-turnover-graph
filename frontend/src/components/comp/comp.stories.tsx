import { Comp, CompData } from "./comp";
import type { Story } from "@storybook/react";
import mocks from "./mocks";
const { data } = mocks;

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
  data,
};
