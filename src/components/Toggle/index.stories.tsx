import { Meta } from "@storybook/react";

import { Toggle } from ".";

const meta: Meta = {
  title: "OctaUI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template = () => <Toggle label="Toggle me" />;

export const Default = Template.bind({});
