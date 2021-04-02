import { Progress, ProgressData } from "./progress";

export default {
  component: Progress,
  title: "Progress",
};

const Template = (args: { data: ProgressData[] }) => (
  <div style={{ width: "300px", height: "300px" }}>
    <Progress {...args} />
  </div>
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
