// KMInnovationCenter page

import Image from "next/image";
import React from "react";

export default function KMInnovationCenterPage() {
  return (
    <>
      {/* HERO IMAGE */}
      <div className="image img-top">
        <Image
          src="/image/page-title/page-title-4.jpg"
          alt="KM Innovation Center Hero"
          className="lazyload"
          width={1920}
          height={804}
        />
      </div>

      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              {/* TITLE */}
              <div className="blog-details-top">
                <h2
                  style={{
                    color: "#000000",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "32px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "20px 0",
                    margin: 0,
                  }}
                >
                  KM Innovation Center
                </h2>
              </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src="/image/blog/image-blog-4.jpg"
                  alt="Children exploring at KM Innovation Center"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* INTRO SECTION */}
              <div className="desc-blog">
                <p className="body-2">
                  The KM Innovation Center is where imagination, technology, and
                  creativity meet. It is a dedicated hub inside KidzMondo where
                  children experiment with new ideas, explore future careers, and
                  discover the power of innovation through play-based learning.
                </p>
                <p className="body-2">
                  From coding and robotics to interactive design and problem-
                  solving challenges, every experience is designed to help kids
                  think like innovators: curious, bold, and solution-oriented.
                </p>
              </div>

              {/* TWO SIDE IMAGES */}
              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-5.jpg"
                    alt="Kids working on a STEM project"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-6.jpg"
                    alt="Creative lab at KM Innovation Center"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
              </div>

              {/* SECTION LIST */}
              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">
                    1. Hands-On Innovation Labs
                  </h5>
                  <p className="body-2">
                    Children participate in guided activities such as building
                    prototypes, experimenting with simple robotics, and creating
                    digital or physical projects. Every lab is designed to turn
                    ideas into something tangible and exciting.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">
                    2. Future Skills for the Next Generation
                  </h5>
                  <p className="body-2">
                    The KM Innovation Center focuses on key future skills:
                    critical thinking, collaboration, creativity, and basic
                    technology literacy. Kids learn how to ask questions, test
                    solutions, and iterate — just like real innovators and
                    entrepreneurs.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">
                    3. Safe, Inspiring Environment
                  </h5>
                  <p className="body-2">
                    Spaces are designed to be safe, colorful, and inspiring,
                    with trained facilitators who support kids at every step.
                    Parents can feel confident while children explore, build,
                    and experiment in a structured yet playful setting.
                  </p>
                </div>
              </div>

              {/* /.content end */}
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
