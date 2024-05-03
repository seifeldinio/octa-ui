// Checkbox.tsx
import React from "react";
import "./checkbox.css";

export interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <div className="flex flex-row items-center space-x-1">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id} data-content={label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
