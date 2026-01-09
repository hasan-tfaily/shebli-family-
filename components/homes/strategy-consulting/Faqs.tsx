import React from "react";

export default function Faqs({ faqs }: { faqs: any }) {
  return (
    <section className="section-faqs h-3 tf-spacing-17">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section m-lr-100 mb-36">
              {/* <div className="text-anime-wave">
                <a href="#" className="tag label text-btn-uppercase">
                  FAQs
                </a>
              </div> */}
              <h3 className="text-anime-wave mb-12">
                {faqs?.title}
              </h3>
            </div>
            <div className="wg-according style-border m-lr-100" id="According">
              <div className="according-item">
                <h5>
                  <a
                    href="#according-1"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {faqs?.featuredItems?.[0]?.title}
                    <span />
                  </a>
                </h5>
                <div
                  id="according-1"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                      {faqs?.featuredItems?.[0]?.Body}
                    </p>
                  </div>
                </div>
              </div>
              <div className="according-item">
                <h5>
                  <a
                    href="#according-2"
                    data-bs-toggle="collapse"
                    className="title-according"
                  >
                    {faqs?.featuredItems?.[1]?.title}
                    <span />
                  </a>
                </h5>
                <div
                  id="according-2"
                  className="collapse show"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                      {faqs?.featuredItems?.[1]?.Body}
                    </p>
                  </div>
                </div>
              </div>
              <div className="according-item">
                <h5>
                  <a
                    href="#according-3"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {faqs?.featuredItems?.[2]?.title}
                    <span />
                  </a>
                </h5>
                <div
                  id="according-3"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                      {faqs?.featuredItems?.[2]?.Body}
                    </p>
                  </div>
                </div>
              </div>
              <div className="according-item">
                <h5>
                  <a
                    href="#according-4"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {faqs?.featuredItems?.[3]?.title}
                    <span />
                  </a>
                </h5>
                <div
                  id="according-4"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                      {faqs?.featuredItems?.[3]?.Body}
                    </p>
                  </div>
                </div>
              </div>
              <div className="according-item">
                <h5>
                  <a
                    href="#according-5"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {faqs?.featuredItems?.[4]?.title}
                    <span />
                  </a>
                </h5>
                <div
                  id="according-5"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     {faqs?.featuredItems?.[4]?.Body}
                    </p>
                  </div>
                </div>
              </div>

              <div className="according-item">
                <h5>
                  <a
                    href="#according-5"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {faqs?.featuredItems?.[5]?.title}
                    <span />
                  </a>
                </h5>
                <div
                  id="according-5"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     {faqs?.featuredItems?.[5]?.Body}
                    </p>
                  </div>
                </div>
              </div>

              <div className="according-item">
                <h5>
                  <a
                    href="#according-5"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {faqs?.featuredItems?.[6]?.title}
                    <span />
                  </a>
                </h5>
                <div
                  id="according-5"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     {faqs?.featuredItems?.[6]?.Body}
                     </p>
                  </div>
                </div>
              </div>

              <div className="according-item">
                <h5>
                  <a
                    href="#according-5"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {faqs?.featuredItems?.[7]?.title}
                    <span />
                  </a>
                </h5>
                <div
                  id="according-5"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     {faqs?.featuredItems?.[7]?.Body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
