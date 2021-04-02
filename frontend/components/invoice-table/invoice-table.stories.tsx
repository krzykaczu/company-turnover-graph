import InvoiceTable from "./invoice-table";
import type { InvoicesData } from "../types";

export default {
  component: InvoiceTable,
  title: "InvoiceTable",
  decorators: [
    (Story) => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: { data: InvoicesData }) => <InvoiceTable {...args} />;

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
