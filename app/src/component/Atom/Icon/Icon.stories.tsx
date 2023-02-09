import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: "Component/Atom/Icon",
  component: Icon,
  argTypes: {
    className: { control: "text" },
    children: { control: null },
    onClick: { control: null },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconExample = Template.bind({});

IconExample.args = {
  className: "IconExample",
};
