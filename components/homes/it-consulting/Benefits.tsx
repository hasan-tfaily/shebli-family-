import React from "react";

export default function Benefits() {
  return (
    <section className="section-benefit h-3 h-8 section-one-page" id="about">
      <div className="box-icon-list">
        <div className="box-icon">
          <div className="icon color-primary">
            <i className="icon-tailored-business" />
          </div>
          <div className="box-content">
            <h5>
              <a href="#" className="title-box">
                Operations
              </a>
            </h5>
            <div className="sub-title">
              From day one, franchisees receive complete operational guidance  from site setup and staff training to daily management and quality assurance  ensuring smooth and consistent performance across every location.
            </div>
          </div>
        </div>
        <div className="box-icon">
          <div className="icon color-primary">
            <i className="icon-expert-market" />
          </div>
          <div className="box-content">
            <h5>
              <a href="#" className="title-box">
                {" "}
                Safety{" "}
              </a>
            </h5>
            <div className="sub-title">
             Our comprehensive safety programs guarantee that every facility operates according to international standards, with strict protocols covering child security, equipment maintenance, and emergency procedures.
            </div>
          </div>
        </div>
        <div className="box-icon">
          <div className="icon color-primary">
            <i className="icon-strategic-planning" />
          </div>
          <div className="box-content">
            <h5>
              <a href="#" className="title-box">
                {" "}
                Marketing{" "}
              </a>
            </h5>
            <div className="sub-title">
              Franchisees gain access to ready-to-launch marketing strategies, digital assets, and promotional campaigns designed to build visibility, attract families, and strengthen brand presence in each market.
            </div>
          </div>
        </div>
        <div className="box-icon">
          <div className="icon color-primary">
            <i className="icon-tax" />
          </div>
          <div className="box-content">
            <h5>
              <a href="#" className="title-box">
                {" "}
                CRM{" "}
              </a>
            </h5>
            <div className="sub-title">
              We provide a tailored Customer Relationship Management system that helps monitor visitor data, enhance customer engagement, and improve retention through personalized experiences and loyalty programs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
