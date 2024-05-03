import { Meta, StoryFn as Story } from "@storybook/react";
import { EmptyState, EmptyStateProps } from ".";

const meta: Meta = {
  title: "OctaUI/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: Story<EmptyStateProps> = (args) => {
  return <EmptyState {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "That's a miss!",
  description: "No results found!",
};
