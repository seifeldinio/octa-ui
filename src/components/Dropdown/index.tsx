import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";

export interface DropdownProps {
  buttonText: string;
  options: { label: string; onClick: () => void }[];
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (onClick: () => void) => {
    onClick(); // Call the provided onClick function
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative inline-flex" ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        data-dropdown-toggle="dropdown"
        type="button"
        className="text-dark bg-accent hover:bg-accent/90 font-medium rounded-xl text-sm h-10 px-3.5 py-1 text-center inline-flex items-center "
        onClick={toggleDropdown}
      >
        {buttonText}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="fade-down z-10 absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 transition-all duration-300 opacity-100"
        >
          <ul className="py-2 text-sm text-gray-700">
            {options.map((option, index) => (
              <li key={index}>
                <a
                  className="cursor-pointer block px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleOptionClick(option.onClick)}
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
