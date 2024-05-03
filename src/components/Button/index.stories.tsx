import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "OctaUI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    size: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "default",
  },
};

export const Material: Story = {
  args: {
    children: "Material",
    variant: "material",
    size: "default",
  },
};

export const MaterialSecondary: Story = {
  args: {
    children: "Material Secondary",
    variant: "materialSecondary",
    size: "default",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    size: "default",
  },
};

export const Key: Story = {
  args: {
    children: "Key",
    variant: "key",
    size: "default",
  },
};

export const Glass: Story = {
  args: {
    children: "Glass",
    variant: "glass",
    size: "default",
  },
};

export const Gradient: Story = {
  args: {
    children: "Gradient",
    variant: "gradient",
    size: "default",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    size: "sm",
  },
};
