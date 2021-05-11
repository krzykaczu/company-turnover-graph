import { Bubble, BubbleData } from "./bubble";

export default {
  component: Bubble,
  title: "Bubble",
};

const Template = (args: {
  data: BubbleData[];
  size: number[];
}): JSX.Element => <Bubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      label: "BEETROOT SE",
      r: 169.8999705709215,
      value: 28866,
      x: -163.8520817380655,
      y: 124.36353489901506,
    },
    {
      label: "GREEN",
      r: 164.9545391918634,
      value: 27210,
      x: 171.00242802471942,
      y: 124.36353489901506,
    },
  ],
  size: [300, 300],
};
