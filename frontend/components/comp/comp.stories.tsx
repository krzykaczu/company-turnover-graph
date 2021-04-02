import { Comp, CompData } from "./comp";

export default {
  component: Comp,
  title: "Comp",
  decorators: [
    (Story) => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: { data: CompData }) => <Comp {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { client: "X", other: 1 },
    { client: "Y", compared: 10 },
  ],
};
