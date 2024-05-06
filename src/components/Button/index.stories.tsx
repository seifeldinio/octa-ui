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
    onClick: () => console.log("Default button clicked"),
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "default",
    onClick: () => console.log("Secondary button clicked"),
  },
};

export const Material: Story = {
  args: {
    children: "Material",
    variant: "material",
    size: "default",
    onClick: () => console.log("Material button clicked"),
  },
};

export const MaterialSecondary: Story = {
  args: {
    children: "Material Secondary",
    variant: "materialSecondary",
    size: "default",
    onClick: () => console.log("MaterialSecondary button clicked"),
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    size: "default",
    onClick: () => console.log("Ghost button clicked"),
  },
};

export const Key: Story = {
  args: {
    children: "Key",
    variant: "key",
    size: "default",
    onClick: () => console.log("Key button clicked"),
  },
};

export const Glass: Story = {
  args: {
    children: "Glass",
    variant: "glass",
    size: "default",
    onClick: () => console.log("Glass button clicked"),
  },
};

export const Gradient: Story = {
  args: {
    children: "Gradient",
    variant: "gradient",
    size: "default",
    onClick: () => console.log("Gradient button clicked"),
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    size: "default",
    onClick: () => console.log("Outline button clicked"),
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    size: "sm",
    onClick: () => console.log("Destructive button clicked"),
  },
};
