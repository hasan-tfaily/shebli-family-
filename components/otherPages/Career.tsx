import React from "react";
import ReactMarkdown from "react-markdown";

export default function Career( { careerSection }: { careerSection?: any } ) {
  return (
    <section className="section-new page-career bg-surface tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <a href="#" className="tag label text-btn-uppercase bg-white">
                  {careerSection?.miniTitle}
                </a>
              </div>
              <h3 className="text-anime-wave-1 mb-12">
                {careerSection?.title}
              </h3>
              <div className="sub-title body-2 text-anime-wave-1">
                {careerSection?.description}
              </div>
            </div>
            <div className="wg-according" id="According1">
              <div className="according-item bg-white style-arrow">
                <h5>
                  <a
                    href="#according1"
                    data-bs-toggle="collapse"
                    className="title-according"
                  >
                    {careerSection?.featuredItems?.[0]?.title}
                    <i className="icon-chevron-down" />
                  </a>
                </h5>
                <div
                  id="according1"
                  className="collapse show"
                  data-bs-parent="#According1"
                >
                  <div className="according-content">
                    <div className="content">
                      <div className="job-description item-content item-content-1">
                        <div className="body-2 title-item" >
                        <h6 className="title-item">Job Description</h6>
                        <ReactMarkdown>
                          {careerSection?.featuredItems?.[0]?.Body}
                        </ReactMarkdown>
                        </div>
                        
                      </div>
                      <div className="item-content item-content-1">
                        <h6 className="title-item">{careerSection?.featuredItems?.[0]?.list?.[0]?.point}</h6>
                        <ul>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[0]?.list?.[1]?.point}
                          </li>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[0]?.list?.[2]?.point}
                          </li>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[0]?.list?.[3]?.point}
                          </li>
                        </ul>
                      </div>
                      <div className="item-content item-content-2">
                        <h6 className="title-item">{careerSection?.featuredItems?.[0]?.list?.[4]?.point}</h6>
                        <div className="price-according mb-20">
                          <h5>{careerSection?.featuredItems?.[0]?.list?.[5]?.point}</h5>
                          <span>{careerSection?.featuredItems?.[0]?.list?.[6]?.point}</span>
                        </div>
                        <a
                          href={careerSection?.featuredItems?.[0]?.ButtonLink?.[0]?.link}
                          className="tf-btn style-1 bg-on-suface-container"
                        >
                          <span> {careerSection?.featuredItems?.[0]?.ButtonLink?.[0]?.title} </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="according-item bg-white style-arrow">
                <h5>
                  <a
                    href="#according2"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {careerSection?.featuredItems?.[1]?.title}
                    <i className="icon-chevron-down" />
                  </a>
                </h5>
                <div
                  id="according2"
                  className="collapse"
                  data-bs-parent="#According1"
                >
                  <div className="according-content">
                    <div className="content">
                      <div className="job-description item-content item-content-1">
                        <h6 className="title-item">Job Description</h6>
                        <ReactMarkdown>
                          {careerSection?.featuredItems?.[1]?.Body}
                        </ReactMarkdown>
                      </div>
                      <div className="item-content item-content-1">
                        <h6 className="title-item">{careerSection?.featuredItems?.[1]?.list?.[0]?.point}</h6>
                        <ul>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[1]?.list?.[1]?.point}
                          </li>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[1]?.list?.[2]?.point}
                          </li>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[1]?.list?.[3]?.point}
                          </li>
                        </ul>
                      </div>
                      <div className="item-content item-content-2">
                        <h6 className="title-item">{careerSection?.featuredItems?.[1]?.list?.[4]?.point}</h6>
                        <div className="price-according mb-20">
                          <h5>{careerSection?.featuredItems?.[1]?.list?.[5]?.point}</h5>
                          <span>{careerSection?.featuredItems?.[1]?.list?.[6]?.point}</span>
                        </div>
                        <a
                          href={careerSection?.featuredItems?.[1]?.ButtonLink?.[0]?.link}
                          className="tf-btn style-1 bg-on-suface-container"
                        >
                          <span> {careerSection?.featuredItems?.[1]?.ButtonLink?.[0]?.title} </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="according-item bg-white style-arrow">
                <h5>
                  <a
                    href="#according3"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {careerSection?.featuredItems?.[2]?.title}
                    <i className="icon-chevron-down" />
                  </a>
                </h5>
                <div
                  id="according3"
                  className="collapse"
                  data-bs-parent="#According1"
                >
                  <div className="according-content">
                    <div className="content">
                      <div className="job-description item-content item-content-1">
                        <h6 className="title-item">Job Description</h6>
                        <ReactMarkdown>
                          {careerSection?.featuredItems?.[2]?.Body}
                        </ReactMarkdown>
                      </div>
                      <div className="item-content item-content-1">
                        <h6 className="title-item">{careerSection?.featuredItems?.[2]?.list?.[0]?.point}</h6>
                        <ul>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[2]?.list?.[1]?.point}
                          </li>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[2]?.list?.[2]?.point}
                          </li>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[2]?.list?.[3]?.point}
                          </li>
                        </ul>
                      </div>
                      <div className="item-content item-content-2">
                        <h6 className="title-item">{careerSection?.featuredItems?.[2]?.list?.[4]?.point}</h6>
                        <div className="price-according mb-20">
                          <h5>{careerSection?.featuredItems?.[2]?.list?.[5]?.point}</h5>
                          <span>{careerSection?.featuredItems?.[2]?.list?.[6]?.point}</span>
                        </div>
                        <a
                          href={careerSection?.featuredItems?.[2]?.ButtonLink?.[0]?.link}
                          className="tf-btn style-1 bg-on-suface-container"
                        >
                          <span> {careerSection?.featuredItems?.[2]?.ButtonLink?.[0]?.title} </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="according-item bg-white style-arrow">
                <h5>
                  <a
                    href="#according4"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    {careerSection?.featuredItems?.[3]?.title}
                    <i className="icon-chevron-down" />
                  </a>
                </h5>
                <div
                  id="according4"
                  className="collapse"
                  data-bs-parent="#According1"
                >
                  <div className="according-content">
                    <div className="content">
                      <div className="job-description item-content item-content-1">
                        <h6 className="title-item">Job Description</h6>
                        <ReactMarkdown>
                          {careerSection?.featuredItems?.[3]?.Body}
                        </ReactMarkdown>
                      </div>
                      <div className="item-content item-content-1">
                        <h6 className="title-item">{careerSection?.featuredItems?.[3]?.list?.[0]?.point}</h6>
                        <ul>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[3]?.list?.[1]?.point}
                          </li>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[3]?.list?.[2]?.point}
                          </li>
                          <li className="body-2">
                            {careerSection?.featuredItems?.[3]?.list?.[3]?.point}
                          </li>
                        </ul>
                      </div>
                      <div className="item-content item-content-2">
                        <h6 className="title-item">{careerSection?.featuredItems?.[3]?.list?.[4]?.point}</h6>
                        <div className="price-according mb-20">
                          <h5>{careerSection?.featuredItems?.[3]?.list?.[5]?.point}</h5>
                          <span>{careerSection?.featuredItems?.[3]?.list?.[6]?.point}</span>
                        </div>
                        <a
                          href={careerSection?.featuredItems?.[1]?.ButtonLink?.[0]?.link}
                          className="tf-btn style-1 bg-on-suface-container"
                        >
                          <span> {careerSection?.featuredItems?.[1]?.ButtonLink?.[0]?.title} </span>
                        </a>
                      </div>
                    </div>
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
