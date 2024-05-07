import { Meta, StoryFn as Story } from "@storybook/react";
import { useState } from "react";

import { Toggle } from ".";

interface ToggleStoryProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const meta: Meta = {
  title: "OctaUI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: Story<ToggleStoryProps> = ({ label, checked, onChange }) => {
  return <Toggle label={label} checked={checked} onChange={onChange} />;
};

export const Default: Story<ToggleStoryProps> = (args) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    args.onChange(checked);
  };

  return (
    <Template label={args.label} checked={isChecked} onChange={handleChange} />
  );
};

Default.args = {
  label: "Toggle me",
  checked: false,
  onChange: (checked: boolean) => console.log("Checked:", checked),
};
