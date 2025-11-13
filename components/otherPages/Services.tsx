import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="section-industry page-industry tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              {/* <div className="text-anime-wave-1">
                <span className="tag label text-btn-uppercase">
                  industries we help
                </span>
              </div> */}
              <h3 className="title-section text-anime-wave-1 mb-12">
                Discover our Projects
                <br />
                each industry.
              </h3>
              <div className="sub-title body-2 color-on-suface-container text-anime-wave-1">
                See how our vision turns imagination into real-world experiences              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-container position-relative">
        <div className="row rg-20">
          {/* KidzMondo */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/projects/KidzMondo"
              className="industry-item style-2 block no-underline"
            >
              <div className="top">
                <div className="icon">
                  <i className="icon-Bank" />
                </div>
                <h6>
                  <span className="name-industry">KidzMondo</span>
                </h6>
              </div>
              <div className="desc">
                A child-sized city where learning meets play, empowering kids to
                explore real-world roles, earn, spend, and grow through
                hands-on discovery.
              </div>
            </Link>
          </div>

          {/* The Escape Park & Resort */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/projects/TheEscapeParkandResort"
              className="industry-item style-2 block no-underline"
            >
              <div className="top">
                <div className="icon">
                  <i className="icon-FirstAidKit" />
                </div>
                <h6>
                  <span className="name-industry">
                    The Escape Park &amp; Resort
                  </span>
                </h6>
              </div>
              <div className="desc">
                A family destination blending leisure, education, and adventure,
                offering multi-sensory nature experiences that inspire wellness
                and togetherness.
              </div>
            </Link>
          </div>

          {/* Karnavali */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/projects/Karnavali"
              className="industry-item style-2 block no-underline"
            >
              <div className="top">
                <div className="icon">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_9360_11765)">
                      <path
                        d="M6 24L26 24C27.1046 24 28 23.1046 28 22L28 8C28 6.89543 27.1046 6 26 6L6 6C4.89543 6 4 6.89543 4 8L4 22C4 23.1046 4.89543 24 6 24Z"
                        stroke="#24283E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 28H12"
                        stroke="#24283E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9360_11765">
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h6>
                  <span className="name-industry">Karnavali</span>
                </h6>
              </div>
              <div className="desc">
                A dynamic indoor carnival offering multi-activity entertainment
                that combines creativity, challenge, and pure fun for every
                family member.
              </div>
            </Link>
          </div>

          {/* Star District */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/projects/StarDistrict"
              className="industry-item style-2 block no-underline"
            >
              <div className="top">
                <div className="icon">
                  <i className="icon-LightbulbFilament" />
                </div>
                <h6>
                  <span className="name-industry">Star District</span>
                </h6>
              </div>
              <div className="desc">
                An interactive entertainment center where young talents discover
                their passion for art, music, fashion, and performance in a
                world built for stars.
              </div>
            </Link>
          </div>

          {/* Kidz Academy */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/projects/KidzAcademy"
            // className="industry-item style-2 block no-underline"
            >
              <div className="industry-item style-2">
                <div className="top">
                  <div className="icon">
                    <i className="icon-AirplaneTakeoff" />
                  </div>
                  <h6>
                    <span className="name-industry">Kidz Academy</span>
                  </h6>
                </div>
                <div className="desc">
                  A space where movement meets learning, helping children grow
                  stronger, more confident, and creatively inspired.
                </div>
              </div>
            </Link>
          </div>

          {/* KM Innovation Center */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/projects/KMInnovationCenter"
            // className="industry-item style-2 block no-underline"
            >
              <div className="industry-item style-2">
                <div className="top">
                  <div className="icon">
                    <i className="icon-Wrench" />
                  </div>
                  <h6>
                    <span className="name-industry">KM Innovation Center</span>
                  </h6>
                </div>
                <div className="desc">
                  A tech-driven zone where kids explore coding, robotics, and
                  design thinking through creative hands-on learning.
                </div>
              </div>
            </Link>
          </div>

          {/* Urban Village */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/projects/UrbanVillage"
            // className="industry-item style-2 block no-underline"
            >
              <div className="industry-item style-2">
                <div className="top">
                  <div className="icon">
                    <i className="icon-Warehouse" />
                  </div>
                  <h6>
                    <span className="name-industry">Urban Village</span>
                  </h6>
                </div>
                <div className="desc">
                  An integrated family complex where families, kids, and young
                  adults come together to play, dine, shop, and unwind in one
                  connected community.
                </div>
              </div>
            </Link>
          </div>

          {/* BOWL N ROCK */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/projects/BowlNRock"
            // className="industry-item style-2 block no-underline"
            >
              <div className="industry-item style-2">
                <div className="top">
                  <div className="icon">
                    <i className="icon-Basket" />
                  </div>
                  <h6>
                    <span className="name-industry">BOWL N ROCK</span>
                  </h6>
                </div>
                <div className="desc">
                  A child-sized city where learning meets play, empowering kids to
                  explore real-world roles, earn, spend, and grow through
                  hands-on discovery.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
