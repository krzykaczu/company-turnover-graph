import InvoiceTable from "./invoice-table";
import type { InvoicesData } from "../types";
import type { Story } from "@storybook/react";

export default {
  component: InvoiceTable,
  title: "InvoiceTable",
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: { data: InvoicesData }): JSX.Element => (
  <InvoiceTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: "x",
      issueDate: "10/10/2020",
      net: 20,
      client: "x",
    },
  ],
};
