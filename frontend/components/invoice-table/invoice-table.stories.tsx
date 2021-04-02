import InvoiceTable from "./invoice-table";
import type { InvoicesData } from "../types";

export default {
  component: InvoiceTable,
  title: "InvoiceTable",
};

const Template = (args: { data: InvoicesData }) => (
  <div style={{ width: "300px", height: "300px" }}>
    <InvoiceTable {...args} />
  </div>
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
