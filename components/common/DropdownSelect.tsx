// "use client";
// import dynamic from "next/dynamic";
// const WeeklyBarChart = dynamic(
//   () => import("@/components/charts/WeeklyBarChart"),
//   { ssr: false }
// );
// import DropdownSelect from "@/components/common/DropdownSelect";
// import React from "react";
// import Link from "next/link";

// export default function Features() {
//   return (
//     <section className="section-why-choose h-5 tf-spacing-21">
//       <div className="tf-container position-relative">
//         <div className="row">
//           <div className="col-12">
//             <div className="section-why-inner">
//               <div className="section-left">
//                 <div className="card-chart w-627">
//                   <div className="top-cart flex justify-content-end">
//                     <DropdownSelect
//                       addtionalParentClass="no-border"
//                       options={["Week", "Month", "Year"]}
//                     />
//                   </div>
//                   <div className="card-chart-content">
//                     <WeeklyBarChart />
//                   </div>
//                 </div>

//                 <div className="progress-box">
//                   <div className="top-box mb-20">
//                     <div className="left">
//                       <div className="sub-title body-2">Progress</div>
//                       <h3 className="number fw-7">4751</h3>
//                     </div>
//                     <h6 className="progress-bars-number">75.5%</h6>
//                   </div>
//                   <div className="progress-cart">
//                     <div className="value" style={{ width: "76%" }} />
//                   </div>
//                 </div>
//               </div>
//               <div className="section-content section-right">
//                 <div className="heading-section">
//                   <div className="wow fadeInUp">
//                     <a href="#" className="tag label text-btn-uppercase">
//                       Investor Deck Glimpse
//                     </a>
//                   </div>
//                   <h3 className="title-section mb-12 wow fadeInUp">
//                    Why Investors Choose Kidz Holding
//                   </h3>
//                   <div className="sub-title body-2 color-on-suface-variant-1 wow fadeInUp">
//                     With over a decade of successful operations and an expanding footprint across the MENA region, Kidz Holding represents a scalable, value‑driven opportunity in the growing family entertainment and education sector.
//                   </div>
//                 </div>
//                 {/* <div className="benefit-lists mb-30">
//                   <div className="benefit-items">
//                     <div className="icon wow fadeInUp">
//                       <i className="icon-checkbox" />
//                     </div>
//                     <div className="title wow fadeInUp" data-wow-delay=".1s">
//                       Experienced Marketing Professionals at Your Service
//                     </div>
//                   </div>
//                   <div className="benefit-items">
//                     <div className="icon wow fadeInUp">
//                       <i className="icon-checkbox" />
//                     </div>
//                     <div className="title wow fadeInUp" data-wow-delay=".1s">
//                       Data-Driven Insights for Informed Decisions
//                     </div>
//                   </div>
//                   <div className="benefit-items">
//                     <div className="icon wow fadeInUp">
//                       <i className="icon-checkbox" />
//                     </div>
//                     <div className="title wow fadeInUp" data-wow-delay=".1s">
//                       Tailored Strategies for Unique Challenges
//                     </div>
//                   </div>
//                   <div className="benefit-items">
//                     <div className="icon wow fadeInUp">
//                       <i className="icon-checkbox" />
//                     </div>
//                     <div className="title wow fadeInUp" data-wow-delay=".1s">
//                       Collaborative Partnership for Shared Success
//                     </div>
//                   </div>
//                 </div> */}
//                 <div className="wow fadeInUp">
//                   <Link
//                     href={/contact-us}
//                     className="tf-btn style-1 bg-on-suface-container"
//                   >
//                     <span>Download Investor Deck</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";

import { useEffect, useRef, useState } from "react";

const optionsDefault = ["Newest", "Oldest", "3 days"];

export interface DropdownSelectProps {
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
  selectedValue,
  addtionalParentClass = "",
}: DropdownSelectProps) {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<string>(
    defaultOption || options[0] || ""
  );

  const currentValue =
    selectedValue || internalSelected || defaultOption || options[0] || "";

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    if (!selectedValue) {
      setInternalSelected(value);
    }
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div
      className={`nice-select ${isOpen ? "open" : ""} ${addtionalParentClass}`}
      ref={selectRef}
      onClick={toggleDropdown}
    >
      <span className="current">{currentValue}</span>
      <ul className="list">
        {options.map((elm, i) => {
          const isSelected = currentValue === elm;
          return (
            <li
              key={i}
              className={`option ${isSelected ? "selected" : ""} text text-1`}
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(elm);
              }}
            >
              {elm}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
