import Image from "next/image";
import React from "react";

import ProjectGallery from "../ProjectGallery";

const staticGalleryImages = [
  "/image/Kidz academy/kidz-academy2.png",
  "/image/Kidz academy/kidz-academy3.png",
  "/image/Kidz academy/kidz-academy2.png",
  "/image/Kidz academy/kidz-academy3.png",
  "/image/Kidz academy/kidz-academy2.png",
  "/image/Kidz academy/kidz-academy3.png",
];

export default function KidzAcademyPage() {
  return (
    <div className="kidz-page">
      {/* HERO (full width) */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt="KidzAcademy Hero"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          priority
          className="kidz-hero__img"
        />
      </div>

      {/* OVERVIEW (logo / title + text side by side) */}
      <section className="kidz-overview">
        <div className="tf-container">
          <div className="kidz-overview__grid">
            {/* Left: Title (no logo available — use text) */}
            <div className="kidz-overview__logo">
              <h2
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "32px",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                KidzAcademy
              </h2>
            </div>

            {/* Right: Concept Text */}
            <div className="kidz-overview__content">
              <h5 className="kidz-overview__h">Concept</h5>
              <p className="kidz-overview__p">
                Kidz Academy is a dance and movement center that brings kids
                together around dance and sports. This center is a destination
                that meets the physical interests of each of your children, be it
                sports, dance, or gymnastics.
              </p>
              <p className="kidz-overview__p">
                Kidz Academy offers cool extracurricular activities including
                dance classes, Taekwondo, MMA, gymnastics and even yoga for kids
                from age four to fifteen in a multitude of styles.
              </p>
              <p className="kidz-overview__p">
                Children and teenagers who want something other than homework to
                look forward to in the afternoon can sign up for afternoon
                classes. They can also enroll for condensed programs during
                holidays and vacations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="kidz-main">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="blog-content blog-details-2-content blog-details-content kidz-main__wrap">
                {/* GALLERY */}
                <ProjectGallery
                  images={staticGalleryImages}
                  altPrefix="KidzAcademy"
                  className="kidzmondo-gallery"
                  sliderClassName="kidzacademy-slider"
                />

                {/* TEXT SECTIONS */}
                <div className="list-desc kidz-sections">
                  <div className="desc-blog">
                    <h5 className="title-desc">Benefits</h5>
                    <p className="body-2">
                      Classes at Kidz Academy help develop a healthy lifestyle
                      and incorporate fitness as a natural part of
                      children&apos;s lives by making fitness fun. Classes
                      incorporate key childhood development elements like
                      leadership, respect, teamwork, confidence, self-esteem,
                      memory, creativity, coordination, and cultural awareness.
                    </p>
                    <p className="body-2">
                      Kidz Academy provides children with a chance to spend their
                      valuable time productively, having fun while at the same
                      time reaping physical and educational benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
