import React from "react";

export default function Benefits({ benefitsSection }: { benefitsSection: any }) {
  return (
    <section className="section-benefit h-3 h-8 section-one-page" id="about">
  <div className="tf-container">
    <div className="row">
      <div className="col-12">
        <div className="heading-section text-center">
          <h3 className="title-section mb-12">{benefitsSection?.title}</h3>
        </div>
      </div>
    </div>

    <div className="box-icon-list">
      <div className="box-icon">
        <div className="icon color-primary">
          <i className="icon-tailored-business" />
        </div>
        <div className="box-content">
          <h5>
            <a href="#" className="title-box">
              {benefitsSection?.featuredItems?.[0]?.title}
            </a>
          </h5>
          <div className="sub-title">
            {benefitsSection?.featuredItems?.[0]?.Body}
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
              {benefitsSection?.featuredItems?.[1]?.title}
            </a>
          </h5>
          <div className="sub-title">
            {benefitsSection?.featuredItems?.[1]?.Body}
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
              {benefitsSection?.featuredItems?.[2]?.title}
            </a>
          </h5>
          <div className="sub-title">
            {benefitsSection?.featuredItems?.[2]?.Body}
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
              {benefitsSection?.featuredItems?.[3]?.title}
            </a>
          </h5>
          <div className="sub-title">
            {benefitsSection?.featuredItems?.[3]?.Body}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
