import { Card } from "./card";

export default {
  component: Card,
  title: "Card",
};

const Template = (args): JSX.Element => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>dupa</div>,
};
