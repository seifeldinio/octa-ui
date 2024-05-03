import type { Meta, StoryObj } from "@storybook/react";
import { Spinner as Spinner } from ".";

const meta: Meta<typeof Spinner> = {
  title: "OctaUI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Point: Story = {
  args: {
    variant: "point",
  },
};

export const Atom: Story = {
  args: {
    variant: "atom",
  },
};
