import Link from "next/link";
import React from "react";

export default function Cta() {
  return (
    <section className="section-cta h-2 section-one-page" id="cta">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-inner style-2">
              <div className="cta-content">
                <h4 className="title-content">
                 Have a project or idea to bring to life? Let’s create it <br />
                  
                  <br />
                  together
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
  );
}
