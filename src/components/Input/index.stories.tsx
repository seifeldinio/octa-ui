import { Meta, StoryFn as Story } from "@storybook/react";
import { Input, InputProps } from ".";

const meta: Meta<InputProps> = {
  title: "OctaUI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  label: "Label",
  onChange: (event) => console.log("Value changed:", event.target.value),
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  label: "Password",
  onChange: (event) => console.log("Value changed:", event.target.value),
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  label: "Enter a number",
  onChange: (event) => console.log("Value changed:", event.target.value),
};
