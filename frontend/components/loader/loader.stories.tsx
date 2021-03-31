import Loader from "./loader";

export default {
  component: Loader,
  title: "Loader",
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
