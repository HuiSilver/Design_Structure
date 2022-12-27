import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ButtonCapsule from "./ButtonCapsule";

export default {
  title: "Component/Atom/Button",
  component: ButtonCapsule,
  argTypes: {
    className: { control: "text" },
    text: { control: "text" },
  },
} as ComponentMeta<typeof ButtonCapsule>;

const Template: ComponentStory<typeof ButtonCapsule> = (args) => (
  <ButtonCapsule {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  className: "button",
  text: "hi",
};
