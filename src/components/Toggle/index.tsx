import React, { useState, useEffect } from "react";

interface ToggleProps {
  label: string;
  checked?: boolean; // Optional prop for controlling checked state
  onChange?: (checked: boolean) => void; // Optional callback for onChange event
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  checked: propChecked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(propChecked);

  useEffect(() => {
    setIsChecked(propChecked);
  }, [propChecked]);

  const toggleCheckbox = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked); // Invoke onChange callback with new checked state
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer hidden"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green"></div>
      <span className="ms-3 text-sm font-medium text-dark ">{label}</span>
    </label>
  );
};
