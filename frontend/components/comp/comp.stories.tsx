import { Comp, CompData } from "./comp";

export default {
  component: Comp,
  title: "Comp",
};

const Template = (args: { data: CompData }) => (
  <div style={{ width: "300px", height: "300px" }}>
    <Comp {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { client: "X", other: 1 },
    { client: "Y", compared: 10 },
  ],
};
