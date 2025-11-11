import Link from "next/link";

import Contact from "@/components/common/Contact";
import Testimonials2 from "@/components/otherPages/Testimonials2";
import React from "react";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
import About from "@/components/homes/insurance-consultancy/About";

export const metadata: Metadata = {
  title:
    "Testimonials || FinWice - Business & Finance Consulting - React Nextjs Template",
  description:
    "FinWice - Business & Finance Consulting - React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-17">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Testimonials" />
            {/* <h2 className="title-page-title">Testimonials</h2> */}
            <div className="sub-title body-2">
              Hear from our clients and discover how our financial solutions
              have made a
              <br />
              positive impact on their businesses and success stories.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Testimonials2 />
        <About/>

         <section className="section-cta h-2 section-one-page" id="cta">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="cta-inner style-2">
                      <div className="cta-content">
                        <h4 className="title-content">
                         Have a project or idea to bring to life? Let’s create it together
                        </h4>
                        <Link
                          href={`/contact-us`}
                          className="tf-btn style-1 bg-white text-center"
                        >
                          <span> Request a Quote </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
      </div>
    </>
  );
}
