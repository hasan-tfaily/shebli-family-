import Link from "next/link";
import React from "react";

export default function Cta({ ctaSection }: { ctaSection?: any }) {
  return (
    <section className="section-cta h-2 section-one-page" id="cta">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-inner style-2">
              <div className="cta-content">
                <h4 className="title-content">
                  {ctaSection?.title}
                </h4>
                <Link
                  href={ctaSection?.ButtonLinks?.[0]?.link}
                  className="tf-btn style-1 bg-white text-center"
                >
                  <span> {ctaSection?.ButtonLinks?.[0]?.title} </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
