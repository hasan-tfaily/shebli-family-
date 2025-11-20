"use client";

import { useEffect, useRef, useState } from "react";

const optionsDefault = ["Newest", "Oldest", "3 days"];

interface DropdownSelectProps {
  onChange?: (elm: string) => void;
  options?: string[];
  defaultOption?: string;
  selectedValue?: string;
  addtionalParentClass?: string;
}

export default function DropdownSelect({
  onChange = () => {},
  options = optionsDefault,
  defaultOption = "",
  selectedValue = "",
  addtionalParentClass = "",
}: DropdownSelectProps) {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLUListElement | null>(null);
  const [selected, setSelected] = useState<string>(options[0]);

  const toggleDropdown = () => {
    selectRef.current?.classList.toggle("open");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        selectRef.current.classList.remove("open");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        selectRef.current.contains(event.target as Node) &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        toggleDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`nice-select ${addtionalParentClass}`} ref={selectRef}>
      <span className="current">
        {selectedValue || selected || defaultOption || options[0]}
      </span>
      <ul className="list" ref={optionsRef}>
        {options.map((elm, i) => (
          <li
            key={i}
            onClick={() => {
              setSelected(elm);
              onChange(elm);
              toggleDropdown();
            }}
            className={`option ${
              !selectedValue
                ? selected === elm
                  ? "selected"
                  : ""
                : selectedValue === elm
                ? "selected"
                : ""
            }  text text-1`}
          >
            {elm}
          </li>
        ))}
      </ul>
    </div>
  );
}
// "use client";

// import React from "react";

// interface DropdownSelectProps {
//   options: string[];
//   value?: string;                     // controlled value (optional)
//   onChange?: (value: string) => void; 
//   addtionalParentClass?: string;// callback when selection changes
// }

// const DropdownSelect: React.FC<DropdownSelectProps> = ({
//   options,
//   value,
//   onChange,
// }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     if (onChange) {
//       onChange(e.target.value);
//     }
//   };

//   // Fallback: if no value provided, use first option (if exists)
//   const selectedValue = value ?? options[0] ?? "";

//   return (
//     <div className="dropdown-select">
//       <select value={selectedValue} onChange={handleChange}>
//         {options.map((opt) => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default DropdownSelect;
