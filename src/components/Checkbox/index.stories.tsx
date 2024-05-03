// Checkbox.stories.tsx
import Checkbox, { CheckboxProps } from ".";
import { Meta, StoryFn as Story } from "@storybook/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const meta: Meta = {
  title: "OctaUI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: Story<CheckboxProps> = (args: any) => {
  const [checked, setChecked] = useState<boolean>(args.checked || false);
  const id = uuidv4(); 

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <Checkbox {...args} id={id} checked={checked} onChange={handleChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
  checked: false,
};
