import { ClientRanksChart, ClientRanksChartData } from "./client-ranks-chart";
import type { Story } from "@storybook/react";
import mocks from "./mocks";
const { data } = mocks;

export default {
  component: ClientRanksChart,
  title: "ClientRanksChart",
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<{ data: ClientRanksChartData }> = (args) => (
  <ClientRanksChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data,
};
