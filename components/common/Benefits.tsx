// "use client";
// import { boxIconItems } from "@/data/benefits";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// export default function Benefits() {
//   return (
//     <section className="section-benefit h-2 tf-spacing-2">
//       <div className="tf-container">
//         <div className="row">
//           <div className="col-12">
//             <Swiper
//               className="sw-icon-list swiper sw-layout"
//               breakpoints={{
//                 0: { slidesPerView: 1 },
//                 575: {
//                   slidesPerView: 1,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                 },
//                 1200: {
//                   slidesPerView: 4,
//                 },
//               }}
//             >
//               {boxIconItems.map((item, index) => (
//                 <SwiperSlide className="swiper-slide" key={index}>
//                   <div className="box-icon">
//                     <div className="icon color-primary">
//                       <i className={item.iconClass} />
//                     </div>
//                     <div className="box-content">
//                       <h5>
//                         <a href="#" className="title-box">
//                           {item.title}
//                         </a>
//                       </h5>
//                       <div className="sub-title">{item.description}</div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { boxIconItems } from "@/data/benefits";

export default function Benefits() {
  const items = boxIconItems.slice(0, 2); // ensure exactly two cards

  return (
    <section style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Center the pair and lock total width for perfect left/right symmetry */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            maxWidth: 1040,     // total width = 2 cards + 32px gap
            margin: "0 auto",
            flexWrap: "wrap",    // stacks to one column on narrow screens
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                flex: "0 1 504px",   // (1040 - 32) / 2 = 504px each
                maxWidth: 504,
                minWidth: 280,
                minHeight: 320,      // same height for both
                border: "1px solid rgba(15,23,42,.18)",
                background: "#fff",
                padding: 28,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ marginBottom: 12, fontSize: 40, color: "#0f766e" }}>
                <i className={item.iconClass} />
              </div>

              <h5 style={{ margin: "0 0 12px", fontSize: 20, color: "#111827" }}>
                <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
                  {item.title}
                </a>
              </h5>

              <div style={{ color: "#6b7280", lineHeight: 1.7 }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
