import Image from "next/image";
import React from "react";

export default function Process() {
  return (
    <section className="section-process h-6 mb-40">
      <div className="section-process-inner">
        {/* LEFT IMAGE */}
        <div className="image tf-animate-1">
          <Image
            src="/image/section/img-section-process-h6.jpg"
            alt="Kidz Holding project development process"
            className="lazyload"
            width={900}
            height={900}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="section-process-content">
          <div className="heading-section style-color-white mb-48">
            <div className="wow fadeInUp">
              <a href="#" className="tag label text-btn-uppercase bg-white">
                Our Process
              </a>
            </div>
            <h2 className="title-section mb-12 wow fadeInUp">
              From Concept to Grand Opening
            </h2>
            <div className="sub-title body-2 wow fadeInUp">
              Kidz Holding partners with franchisees through every stage of
              development—from choosing the right location to welcoming the
              first guests—ensuring consistency with our global standards.
            </div>
          </div>

          {/* STEPS */}
          <div className="process-list style-column hover-active-step">
            {/* 1. Site Selection */}
            <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp">1</div>
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Site Selection
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  We support franchisees in identifying and evaluating prime
                  locations that align with market demand, accessibility, and
                  target audience, ensuring a strong foundation for long-term
                  performance.
                </div>
              </div>
            </div>

            {/* 2. Design & Layout */}
            <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp">2</div>
              <div className="circle wow fadeInUp" />
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Design & Layout
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  Our design team develops custom layouts that optimize guest
                  flow, safety, and operational efficiency, while reflecting the
                  unique character of each Kidz Holding concept.
                </div>
              </div>
            </div>

            {/* 3. Construction & Fit-Out */}
            <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp">3</div>
              <div className="circle wow fadeInUp" />
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Construction & Fit-Out
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  We provide technical guidance throughout construction and
                  fit-out, ensuring that all areas meet Kidz Holding’s quality,
                  safety, and brand specifications.
                </div>
              </div>
            </div>

            {/* 4. Recruitment & Training */}
            <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp">4</div>
              <div className="circle wow fadeInUp" />
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Recruitment & Training
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  We support you in building the right team and deliver
                  comprehensive training programs so staff can uphold our
                  standards in safety, service, and guest experience from day
                  one.
                </div>
              </div>
            </div>

            {/* 5. Pre-Launch Marketing */}
            <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp">5</div>
              <div className="circle wow fadeInUp" />
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Pre-Launch Marketing
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  Franchisees receive marketing toolkits, launch campaigns, and
                  activation ideas designed to build awareness, generate buzz,
                  and secure strong early bookings ahead of opening.
                </div>
              </div>
            </div>

            {/* 6. Grand Opening & Ongoing Support */}
            <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp">6</div>
              <div className="circle wow fadeInUp" />
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Grand Opening & Beyond
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  Our team supports the grand opening with on-site coordination,
                  event planning, and media visibility, followed by ongoing
                  operational and marketing support to keep performance on
                  track.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
