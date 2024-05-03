import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "OctaUI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "https://www.billboard.com/wp-content/uploads/media/Deadmau5-press-photo-credit-Jess-Baumung-2016-billboard-1548.jpg",
    size: "sm",
    variant: "pink",
  },
};

export const Small: Story = {
  args: {
    children: "JD",
    size: "sm",
    variant: "pink",
  },
};

export const Medium: Story = {
  args: {
    children: "JD",
    size: "medium",
    variant: "mint",
  },
};

export const Large: Story = {
  args: {
    children: "JD",
    size: "large",
    variant: "blue",
  },
};
