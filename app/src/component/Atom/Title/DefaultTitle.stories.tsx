import { ComponentStory, ComponentMeta } from "@storybook/react";
import DefaultTitle from "./DefaultTitle";
export default {
  title: "Component/Atom/Title",
  component: DefaultTitle,
  argTypes: {
    title: { control: "text" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof DefaultTitle>;

const Template: ComponentStory<typeof DefaultTitle> = (args) => (
  <DefaultTitle {...args} />
);

export const BasicTitle = Template.bind({});

BasicTitle.args = {
  title: "제목",
  className: "example",
};
