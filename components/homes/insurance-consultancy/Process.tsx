import Image from "next/image";
import React from "react";

export default function Process() {
  return (
    <section className="section-process h-6 mb-40">
      <div className="section-process-inner">
        {/* LEFT IMAGE */}
        <div className="image tf-animate-1">
          <Image
            src="/image/section/franchise.jpg"
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
          <div className="process-list style-column hover-active-step" >
            {/* 1. Site Selection */}
            <div className="process-item style-color-white style-3 step-hover" >
              <div className="title number-process wow fadeInUp" style={{backgroundColor: "white", color:"#232559"}}>1</div>
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Franchise
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  Our strong brand portfolio and proven track record make Kidz Holding concepts highly attractive to investors and operators worldwide. Our brands consistently generate exceptional footfall, enhance destination value, and deliver strong commercial performance. 
                  Through our franchise model, partners gain access to world-class expertise across design, delivery, operations, training, marketing, and ongoing support. This allows franchisees to operate confidently and efficiently under the Kidz Holding system while benefiting from our deep industry knowledge, operational excellence, and continuous development.
                </div>
              </div>
            </div>

            {/* 2. Design & Layout */}
            <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp" style={{backgroundColor: "white", color:"#232559"}}>2</div>
              <div className="circle wow fadeInUp" />
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Management Contract
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                 Kidz Holding offers comprehensive management solutions for entertainment assets of all sizes. With extensive operational expertise and multidisciplinary capabilities, we help partners unlock the full potential of their attractions. <br/> <br/>
                 We manage both our own concepts and third-party brands, ensuring operational excellence, commercial optimization, staff training, guest experience enhancement, and long-term business sustainability. Our global experience positions us as a trusted operator for leisure destinations seeking reliable, results-driven management
                </div>
              </div>
            </div>

            {/* 3. Construction & Fit-Out */}
            <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp" style={{backgroundColor: "white", color:"#232559"}}>3</div>
              <div className="circle wow fadeInUp" />
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process mb-10">
                    Concept Development
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                 We specialize in creating original, future-ready entertainment concepts that combine imagination, fun, education, and commercial viability. Our team develops fully integrated experiences built on strong storytelling, innovative activities, and a clear operational and financial foundation. <br/> <br/>
                 From edutainment centers and FECs to themed attractions and hybrid leisure concepts, we transform ideas into scalable brands tailored to each market’s cultural and commercial needs.
                </div>
              </div>
            </div>

            {/* 4. Recruitment & Training */}
            {/* <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp" style={{backgroundColor: "white", color:"#232559"}}>4</div>
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
            </div> */}

            {/* 5. Pre-Launch Marketing */}
            {/* <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp" style={{backgroundColor: "white", color:"#232559"}}>5</div>
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
            </div> */}

            {/* 6. Grand Opening & Ongoing Support */}
            {/* <div className="process-item style-color-white style-3 step-hover">
              <div className="title number-process wow fadeInUp" style={{backgroundColor: "white", color:"#232559"}}>6</div>
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
