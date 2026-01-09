"use client";
import React from "react";


export default function Contact({ contactSection }: { contactSection?: any }) {
  const activities: string[] = contactSection?.list || [];
  const half = Math.ceil(activities.length / 2);
  const leftCol = activities.slice(0, half);
  const rightCol = activities.slice(half);

  return (
    <section className="section-contact-home h-2 tf-spacing-15 activities-section">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="section-contact-home-inner">
              <div className="activities-block">
                <div className="heading-section mb-28 style-color-white">
                  <h5 className="title-section mb-12 wow fadeInUp">{contactSection?.title}</h5>
                  <div className="sub-title body-2 wow fadeInUp">
                    {contactSection?.description}
                  </div>
                </div>

                <div className="activities-cols">
                  <div className="benefit-lists">
                    {leftCol.map((activity) => (
                      <div className="benefit-items style-small-2" key={activity.point}>
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="caption-1 wow fadeInUp" data-wow-delay=".1s">
                          {activity.point}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="benefit-lists">
                    {rightCol.map((activity) => (
                      <div className="benefit-items style-small-2" key={activity.point}>
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="caption-1 wow fadeInUp" data-wow-delay=".1s">
                          {activity.point}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* /.activities-cols */}
              </div>
              {/* /.activities-block */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
