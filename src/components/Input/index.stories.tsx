import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "OctaUI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    label: "Label",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    label: "Password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    label: "Enter a number",
  },
};
