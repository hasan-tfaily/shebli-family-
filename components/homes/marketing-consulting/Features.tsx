"use client";

import React from "react";

interface DropdownSelectProps {
  options: string[];
  value?: string;                     // controlled value (optional)
  onChange?: (value: string) => void; // callback when selection changes
  addtionalParentClass?: string;      // 👈 optional extra class for wrapper
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  value,
  onChange,
  addtionalParentClass,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const selectedValue = value ?? options[0] ?? "";

  const wrapperClassName = [
    "dropdown-select",
    addtionalParentClass, // e.g. "no-border"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName} style={{ width: "100%" }}>
      <select
        value={selectedValue}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "56px", // match your input height if needed
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
