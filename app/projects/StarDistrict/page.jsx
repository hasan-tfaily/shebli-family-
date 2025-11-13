
import Image from "next/image";
import React from "react";

export default function StarDistrict() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/page-title-4.jpg"
          alt="Star District Hero"
          className="lazyload"
          width={1920}
          height={804}
        />
      </div>

      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              {/* Title */}
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
                  Star District
                </h2>
              </div>

              {/* Main image */}
              <div className="image-blog">
                <Image
                  src={"/image/blog/image-blog-4.jpg"}
                  alt="Star District"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* Intro description */}
              <div className="desc-blog">
                <p className="body-2">
                  Star District is an interactive entertainment center where
                  young talents discover their passion for art, music, fashion,
                  and performance in a world built for stars. Every corner is
                  designed to inspire creativity, confidence, and self-expression.
                </p>
                <p className="body-2">
                  Through immersive studios, themed zones, and guided activities,
                  children and teens get the chance to step into the spotlight,
                  experiment with different roles, and build skills that stay
                  with them long after the visit.
                </p>
              </div>

              {/* Two side images */}
              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-5.jpg"
                    alt="Star District Activity 1"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-6.jpg"
                    alt="Star District Activity 2"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
              </div>

              {/* Sections */}
              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">
                    1. Creative Performance Zones
                  </h5>
                  <p className="body-2">
                    From music studios and fashion runways to mini theaters,
                    Star District offers dedicated spaces where kids can sing,
                    act, dance, and present. Each zone is built to nurture
                    talent and boost stage confidence in a fun, supportive way.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">
                    2. Learn-by-Doing Experiences
                  </h5>
                  <p className="body-2">
                    Children don&apos;t just watch—they participate. Guided
                    workshops, role-play sessions, and hands-on activities help
                    them understand the basics of performance, collaboration,
                    and creative production.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">
                    3. Confidence & Self-Expression
                  </h5>
                  <p className="body-2">
                    Star District is designed to help kids feel seen and heard.
                    Whether they&apos;re shy beginners or natural performers,
                    every child gets the chance to shine, try something new, and
                    celebrate their unique personality.
                  </p>
                </div>
              </div>

              {/* end content */}
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
