import { Progress, ProgressData } from "./progress";

export default {
  component: Progress,
  title: "Progress",
  decorators: [
    (Story) => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: { data: ProgressData[] }) => <Progress {...args} />;

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
