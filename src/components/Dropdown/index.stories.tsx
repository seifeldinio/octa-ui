import { Meta, StoryFn as Story } from "@storybook/react";

import Dropdown, { DropdownProps } from ".";

const meta: Meta = {
  title: "OctaUI/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryType = Story<DropdownProps>;

const Template: StoryType = (args) => <Dropdown {...args} />;

export const Default: StoryType = Template.bind({});
Default.args = {
  buttonText: "Actions",
  options: [
    { label: "Newsletter", onClick: () => console.log("Newsletter clicked") },
    { label: "Purchases", onClick: () => console.log("Purchases clicked") },
    { label: "Downloads", onClick: () => console.log("Downloads clicked") },
    {
      label: "Team Account",
      onClick: () => console.log("Team Account clicked"),
    },
  ],
};
