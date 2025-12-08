"use client";
import React from "react";

const activities = [
  "Major Rides",
  "Arcades",
  "Family Rides",
  "Wall Climbing",
  "Trampoline",
  "Simulators",
  "Sky Trail",
  "Rope Course",
  "Laser Tag",
  "Karting",
  "Esports",
  "Mirror Maze",
  "Zero Gravity",
  "Circus Zone",
];

export default function Contact() {
  // Split activities into 3 columns
  const itemsPerColumn = Math.ceil(activities.length / 3);
  const columns = [
    activities.slice(0, itemsPerColumn),
    activities.slice(itemsPerColumn, itemsPerColumn * 2),
    activities.slice(itemsPerColumn * 2),
  ];

  return (
    <section className="section-contact-home h-2 tf-spacing-15">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="section-contact-home-inner">
              <div className="section-content">
                <div className="heading-section mb-28 style-color-white">
                  <h3 className="title-section mb-12 wow fadeInUp">
                    Activities
                  </h3>
                  <div className="sub-title body-2 wow fadeInUp">
                    Karnavali offers a wide range of engaging activities,
                    including but not limited to:
                  </div>
                </div>

                <div className="cols">
                  {columns.map((column, colIndex) => (
                    <div className="benefit-lists" key={colIndex}>
                      {column.map((activity) => (
                        <div
                          className="benefit-items style-small-2"
                          key={activity}
                        >
                          <div className="icon wow fadeInUp">
                            <i className="icon-checkbox" />
                          </div>
                          <div
                            className="caption-1 wow fadeInUp"
                            data-wow-delay=".1s"
                          >
                            {activity}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact form & other boxes removed to match the simple layout in the screenshot */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
