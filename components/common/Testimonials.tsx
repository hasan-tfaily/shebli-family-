"use client";

import React from "react";

export default function Testimonials({ testimonialSection }: { testimonialSection?: any }) {
  const rows: any[] = [];
  if (testimonialSection?.featuredItems) {
    for (let i = 0; i < testimonialSection.featuredItems.length - 1; i += 3) {
      rows.push(testimonialSection.featuredItems.slice(i, i + 3));
    }
  }
  return (
    <section
      className="section-testimonials h-2 tf-spacing-14 section-one-page"
      id="testimonials"
    >
      <div className="tf-container">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row"
            style={rowIndex < rows.length - 1 ? { marginBottom: "30px" } : {}}
          >
            {row.map((item: any, index: number) => (
              <div className="col-12 col-md-4 d-flex" key={`${rowIndex}-${index}`}>
                <div className="testimonial-item flex-grow-1">
                  <div className="testimonial-top">
                    <div className="counter-item">
                      <div className="counter">
                        <h5 className="text">{item.title}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item-content">
                    <div className="text">{item.Body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
