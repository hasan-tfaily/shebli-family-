"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Breadcumb from "@/components/common/Breadcumb";
import Brands from "@/components/homes/tax-advisory/Brands";
import { getPageByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";
import { get } from "http";

export default function ServicesPage() {
  const [industriesWeServePage, setBrandData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
          const data = await getPageByName({
            pageName: "Industries We Serve - Page",
            populate: [
              "Hero",
              "Hero.image",
              "section",
              "section.img",
              "section.featuredItems.list",
              "section.ButtonLinks",
              "section.featuredItems",
              "section.featuredItems.img",
              "section.imageScroll",
              "section.ButtonLinks"
            ],
            revalidate: 0,
          });
          setBrandData(data);
        };
        fetchData();
      }, []);
  return (
    <>
      <div className="page-title style-1 bg-img-7">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Industries We Serve" />
            <h2 className="title-page-title">{industriesWeServePage?.Hero?.title}</h2>
            <div className="sub-title body-2">
              {industriesWeServePage?.Hero?.description}
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* INDUSTRIES GRID */}
        <section className="section-industry page-industry tf-spacing-2">
          <div className="tf-container position-relative">
            <div className="row">
              <div className="col-12">
                <div className="heading-section text-center">
                  <div className="text-anime-wave-1">
                    <a href="#" className="tag label text-btn-uppercase">
                    {industriesWeServePage?.section[0]?.miniTitle}
                    </a>
                  </div>
                  <h3 className="title-section text-anime-wave-1 mb-12">
                      {industriesWeServePage?.section[0]?.title}
                  </h3>
                  <div className="sub-title body-2 color-on-suface-container text-anime-wave-1">
                    {industriesWeServePage?.section[0]?.description}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tf-container position-relative">
            <div className="row rg-20">
              {/* 1 – Leisure Architecture */}
              <div className="col-lg-4 col-md-6" style={{ display: "flex" }}>
                <div className="industry-item style-2" style={{ flex: 1, width: "100%" }}>
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={getStrapiMediaUrl(industriesWeServePage?.section[0]?.featuredItems[0]?.img)}
                        alt="Leisure Architecture"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h6>
                      <a
                        href="#"
                        className="name-industry"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-leisure-architecture"
                      >
                        {industriesWeServePage?.section[0]?.featuredItems[0]?.title}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 2 – Hospitality & Leisure Resorts */}
              <div className="col-lg-4 col-md-6" style={{ display: "flex" }}>
                <div className="industry-item style-2" style={{ flex: 1, width: "100%" }}>
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={getStrapiMediaUrl(industriesWeServePage?.section[0]?.featuredItems[1]?.img)}
                        alt="Hospitality and Leisure Resort"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h6>
                      <a
                        href="#"
                        className="name-industry"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-hospitality-resorts"
                      >
                      {industriesWeServePage?.section[0]?.featuredItems[1]?.title}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 3 – Urban Landscapes */}
              <div className="col-lg-4 col-md-6" style={{ display: "flex" }}>
                <div className="industry-item style-2" style={{ flex: 1, width: "100%" }}>
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={getStrapiMediaUrl(industriesWeServePage?.section[0]?.featuredItems[2]?.img)}
                        alt="Urban Realm and Leisure Landscape"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h6>
                      <a
                        href="#"
                        className="name-industry"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-urban-landscapes"
                      >
                        {industriesWeServePage?.section[0]?.featuredItems[2]?.title}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 4 – Family Leisure Destinations */}
              <div className="col-lg-4 col-md-6" style={{ display: "flex" }}>
                <div className="industry-item style-2" style={{ flex: 1, width: "100%" }}>
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={getStrapiMediaUrl(industriesWeServePage?.section[0]?.featuredItems[3]?.img)}
                        alt="Family Leisure Destinations"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h6>
                      <a
                        href="#"
                        className="name-industry"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-family-leisure"
                      >
                        {industriesWeServePage?.section[0]?.featuredItems[3]?.title}  
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 5 – Shopping Centers */}
              <div className="col-lg-4 col-md-6" style={{ display: "flex" }}>
                <div className="industry-item style-2" style={{ flex: 1, width: "100%" }}>
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={getStrapiMediaUrl(industriesWeServePage?.section[0]?.featuredItems[4]?.img)}
                        alt="Shopping and Mixed-Use Environment"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h6>
                      <a
                        href="#"
                        className="name-industry"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-shopping-centers"
                      >
                        {industriesWeServePage?.section[0]?.featuredItems[4]?.title}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 6 – Education */}
              <div className="col-lg-4 col-md-6" style={{ display: "flex" }}>
                <div className="industry-item style-2" style={{ flex: 1, width: "100%" }}>
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={getStrapiMediaUrl(industriesWeServePage?.section[0]?.featuredItems[5]?.img)}
                        alt="Education and Working Environment"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h6>
                      <a
                        href="#"
                        className="name-industry"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-education"
                      >
                        {industriesWeServePage?.section[0]?.featuredItems[5]?.title}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 7 – Real Estate & Landlords */}
              <div className="col-lg-4 col-md-6" style={{ display: "flex" }}>
                <div className="industry-item style-2" style={{ flex: 1, width: "100%" }}>
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={getStrapiMediaUrl(industriesWeServePage?.section[0]?.featuredItems[6]?.img)}
                        alt="Real Estate & Landlords"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h6>
                      <a
                        href="#"
                        className="name-industry"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-real-estate"
                      >
                        {industriesWeServePage?.section[0]?.featuredItems[6]?.title}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 8 – Playful Attractions */}
              <div className="col-lg-4 col-md-6" style={{ display: "flex" }}>
                <div className="industry-item style-2" style={{ flex: 1, width: "100%" }}>
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={getStrapiMediaUrl(industriesWeServePage?.section[0]?.featuredItems[7]?.img)}
                        alt="Playful Attractions"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h6>
                      <a
                        href="#"
                        className="name-industry"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-playful-attractions"
                      >
                        {industriesWeServePage?.section[0]?.featuredItems[7]?.title}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODALS FOR INDUSTRY DETAILS */}
        <div className="industry-modals">
          {/* Real Estate Developers & Landlords */}
          <div
            className="modal fade"
            id="modal-real-estate"
            tabIndex={-1}
            aria-labelledby="modal-real-estate-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-real-estate-label">
                    {industriesWeServePage?.section[0]?.featuredItems[6]?.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>
                    {industriesWeServePage?.section[0]?.featuredItems[6]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Leisure Architecture */}
          <div
            className="modal fade"
            id="modal-leisure-architecture"
            tabIndex={-1}
            aria-labelledby="modal-leisure-architecture-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-leisure-architecture-label">
                    {industriesWeServePage?.section[0]?.featuredItems[0]?.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>
                    {industriesWeServePage?.section[0]?.featuredItems[0]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hospitality & Leisure Resorts */}
          <div
            className="modal fade"
            id="modal-hospitality-resorts"
            tabIndex={-1}
            aria-labelledby="modal-hospitality-resorts-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-hospitality-resorts-label">
                    {industriesWeServePage?.section[0]?.featuredItems[1]?.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>
                    {industriesWeServePage?.section[0]?.featuredItems[1]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Urban Landscapes */}
          <div
            className="modal fade"
            id="modal-urban-landscapes"
            tabIndex={-1}
            aria-labelledby="modal-urban-landscapes-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-urban-landscapes-label">
                    {industriesWeServePage?.section[0]?.featuredItems[2]?.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>
                    {industriesWeServePage?.section[0]?.featuredItems[2]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Family Leisure Destinations */}
          <div
            className="modal fade"
            id="modal-family-leisure"
            tabIndex={-1}
            aria-labelledby="modal-family-leisure-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-family-leisure-label">
                    {industriesWeServePage?.section[0]?.featuredItems[3]?.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>
                    {industriesWeServePage?.section[0]?.featuredItems[3]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Playful Attractions */}
          <div
            className="modal fade"
            id="modal-playful-attractions"
            tabIndex={-1}
            aria-labelledby="modal-playful-attractions-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-playful-attractions-label">
                    {industriesWeServePage?.section[0]?.featuredItems[7]?.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>
                    {industriesWeServePage?.section[0]?.featuredItems[7]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className="modal fade"
            id="modal-education"
            tabIndex={-1}
            aria-labelledby="modal-education-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-education-label">
                    {industriesWeServePage?.section[0]?.featuredItems[5]?.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>
                    {industriesWeServePage?.section[0]?.featuredItems[5]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shopping Centers */}
          <div
            className="modal fade"
            id="modal-shopping-centers"
            tabIndex={-1}
            aria-labelledby="modal-shopping-centers-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-shopping-centers-label">
                    {industriesWeServePage?.section[0]?.featuredItems[4]?.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>
                    {industriesWeServePage?.section[0]?.featuredItems[4]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Concept Development – Our Methodology (Image + Bullet Steps) */}
        

        <Brands 
        brandsSectionData={industriesWeServePage?.section[1]}
        />

        {/* FAQ / ACCORDION SECTION */}
        {/* <section className="section-faqs h-5 tf-spacing-2">
          <div className="tf-container position-relative">
            <div className="row rg-60">
              <div className="col-lg-6">
                <div className="section-faqs-left mr-15">
                  <div className="image tf-animate-1">
                    <Image
                      src="/image/section/services 2.jpg"
                      alt=""
                      className="lazyloaded"
                      width={615}
                      height={615}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-content ml-35">
                  <div className="heading-section">
                    <div className="wow fadeInUp">
                      <a href="#" className="tag label text-btn-uppercase">
                        From Vision to Reality
                      </a>
                    </div>
                    <h3 className="wow fadeInUp">
                      Concept Development: <br />
                      Our Methodology
                    </h3>
                  </div>
                  <div className="wg-according style-border" id="According">
                    <div className="according-item">
                      <h5>
                        <a
                          href="#according-1"
                          data-bs-toggle="collapse"
                          className="title-according collapsed"
                        >
                          Consultancy and Advisory Services
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
                            Comprehensive support from information analysis and project diagnosis to
                            feasibility evaluation and clear implementation planning—tailored to drive
                            strategic success.
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
                          Strategy Development
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
                            We craft impactful strategies through clear mission definition, focused
                            strategy formulation, compelling USP development, strong design
                            fundamentals, and a refined customer journey.
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
                          Concept Design and Development
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
                            From structured thinking processes and compelling storytelling to initial
                            sketches, preliminary concepts, and in-depth detail development—we shape
                            ideas into powerful, creative solutions.
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
                          Project Delivery and Assurance
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
                            End-to-end execution covering supply chain, team onboarding, ERP
                            integration, and coordinated marketing, with seamless operations and
                            follow-up to ensure lasting success.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="section-cta h-2 section-one-page" id="cta">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="cta-inner style-2">
                  <div className="cta-content">
                    <h4 className="title-content">{industriesWeServePage?.section[2]?.title}</h4>
                    <Link
                      href="/contact-us"
                      className="tf-btn style-1 bg-white text-center"
                    >
                      <span> {industriesWeServePage?.section[2]?.ButtonLinks[0]?.title} </span>
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
