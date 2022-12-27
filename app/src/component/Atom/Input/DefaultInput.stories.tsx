import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import DefaultInput from "./DefaultInput";

export default {
  title: "Component/Atom/Input",
  component: DefaultInput,
  argTypes: {
    type: { control: "text" },
    text: { control: "text" },
  },
} as ComponentMeta<typeof DefaultInput>;

const Template: ComponentStory<typeof DefaultInput> = (args) => (
  <DefaultInput {...args} />
);

export const TextInput = Template.bind({});

TextInput.args = {
  type: "text",
  text: "hi",
};
