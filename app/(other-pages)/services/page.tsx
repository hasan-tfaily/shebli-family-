import Link from "next/link";
import Image from "next/image";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
import Brands from "@/components/homes/tax-advisory/Brands";

export const metadata: Metadata = {
  title: "Services || Kidz Holding - Franchise & Corporate Website",
  description: "Kidz Holding - Franchise & Corporate Website",
};

export default function Page() {
  return (
    <>
      <div className="page-title style-1 bg-img-7">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Industries We Serve" />
            <h2 className="title-page-title">Industries We Serve </h2>
            <div className="sub-title body-2">
              Building brighter futures through education, community, and sustainability.
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
                      industries we serve
                    </a>
                  </div>
                  <h3 className="title-section text-anime-wave-1 mb-12">
                    Designing Experiences Across <br />
                    Every Leisure and Lifestyle Industry
                  </h3>
                  <div className="sub-title body-2 color-on-suface-container text-anime-wave-1">
                    Kidz Holding partners with developers, operators, and destination owners across a
                    diverse range of industries. Our expertise spans entertainment design, operations,
                    master planning, and concept creation, enabling us to deliver meaningful,
                    future-ready experiences tailored to each environment.
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
                        src="/image/icon/architecture.svg"
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
                        Leisure Architecture
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
                        src="/image/icon/hospitality.svg"
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
                        Hospitality and
                        <br />
                        Leisure Resort
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
                        src="/image/icon/landscape.svg"
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
                        Urban Landscapes
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
                        src="/image/icon/family.svg"
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
                        Family Leisure
                        <br />
                        Destinations
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
                        src="/image/icon/shopping.svg"
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
                        Shopping Centers
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
                        src="/image/icon/education.svg"
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
                        Education
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
                        src="/image/icon/urban village.svg"
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
                        Real Estate &amp; Landlords
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
                        src="/image/icon/play.svg"
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
                        Playful Attractions
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
                    Real Estate Developers &amp; Landlords
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
                    We work with real estate developers and landlords to transform properties into
                    immersive, fully fledged lifestyle destinations. By integrating entertainment,
                    edutainment concepts, and family-centric experiences, we help increase footfall,
                    extend dwell time, and enhance the overall commercial value of developments.
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
                    Leisure Architecture
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
                    We collaborate with architects and master planners to infuse leisure-driven,
                    experience-based elements into the built environment. Our early involvement
                    ensures seamless integration of storytelling, zoning, guest flow, and operational
                    functionality.
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
                    Hospitality &amp; Leisure Resorts
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
                    We develop family zones, kids’ clubs, entertainment hubs, and bespoke experiences
                    that enrich the resort journey. Our concepts enhance guest satisfaction, create
                    memorable moments, and support premium positioning for hospitality brands.
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
                    Urban Landscapes
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
                    We activate public and semi-public urban spaces by transforming them into
                    interactive, community-focused environments. Through playful design and
                    experiential storytelling, urban areas become vibrant destinations.
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
                    Family Leisure Destinations
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
                    From large-scale entertainment hubs to boutique family venues, we design
                    experiences that attract visitors, build repeat engagement, and strengthen
                    destination identity.
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
                    Playful Attractions
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
                    We design standalone attractions and interactive play zones that deliver fun,
                    education, and memorable engagement for children and families. Each attraction is
                    crafted for operational efficiency and long-term sustainability.
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
                    Education
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
                    We collaborate with schools, institutions, and learning centers to merge
                    education with experiential play. The result is hands-on environments that
                    support learning outcomes, skill development, and student engagement.
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
                    Shopping Centers
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
                    We help malls evolve into experiential lifestyle destinations by implementing
                    immersive anchor experiences, themed entertainment zones, and family-focused
                    concepts that boost traffic and enrich the tenant mix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Concept Development – Our Methodology (Image + Bullet Steps) */}
        

        <Brands />

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
                    <h4 className="title-content">Start your journey with us</h4>
                    <Link
                      href="/contact-us"
                      className="tf-btn style-1 bg-white text-center"
                    >
                      <span> Franchise Opportunities </span>
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
