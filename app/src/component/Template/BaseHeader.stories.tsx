import { ComponentMeta, ComponentStory } from "@storybook/react";
import BaseHeader from "./BaseHeader";

export default {
  title: "Component/Template/BaseHeader",
  component: BaseHeader,
  argTypes: {
    className: { control: "text" },
    title: { control: "text" },
    children: { control: null },
    showBackButton: { control: null },
    onBack: { control: null },
  },
} as ComponentMeta<typeof BaseHeader>;

const Template: ComponentStory<typeof BaseHeader> = (args) => (
  <BaseHeader {...args} />
);

export const BaseHeaderExample = Template.bind({});

BaseHeaderExample.args = {
  className: "BaseHeaderExample",
  title: "example",
};
