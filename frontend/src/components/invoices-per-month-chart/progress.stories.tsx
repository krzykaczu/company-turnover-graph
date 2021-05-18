import { InvoicesPerMonthChart, InvoicesPerMonthChartData } from "./progress";
import type { Story } from "@storybook/react";

export default {
  component: InvoicesPerMonthChart,
  title: "Progress",
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<{ data: InvoicesPerMonthChartData[] }> = (args) => (
  <InvoicesPerMonthChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      index: 0,
      month: "jan",
      sumOfInvoices: 20,
    },
  ],
};
