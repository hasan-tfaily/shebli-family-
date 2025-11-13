import Image from "next/image";
import React from "react";

export default function KidzMondoPage() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/page-title-4.jpg"
          alt="KidzMondo Hero"
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
                  KidzMondo
                </h2>
              </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src="/image/blog/image-blog-4.jpg"
                  alt="KidzMondo"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* INTRO SECTION */}
              <div className="desc-blog">
                <p className="body-2">
                  KidzMondo is a child-sized city where learning meets play.
                  Children explore real-world professions, earn and spend their
                  own currency, and develop social and practical skills through
                  immersive role play.
                </p>
                <p className="body-2">
                  Each visit is designed to be both fun and educational,
                  empowering kids to understand how a city functions while
                  discovering their own interests and talents.
                </p>
              </div>

              {/* TWO IMAGES */}
              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-5.jpg"
                    alt="KidzMondo Activity 1"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-6.jpg"
                    alt="KidzMondo Activity 2"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
              </div>

              {/* BULLET SECTIONS */}
              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">1. Real-World Role Play</h5>
                  <p className="body-2">
                    Kids can experience a variety of professions—such as doctor,
                    pilot, chef, journalist, and more—in safe, child-sized
                    environments. Each activity is guided and designed to build
                    confidence and curiosity.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">2. Learn Through Edutainment</h5>
                  <p className="body-2">
                    Every activity combines fun with learning outcomes: teamwork,
                    responsibility, problem-solving, and basic financial literacy
                    through KidzMondo’s own currency system.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">3. Safe & Structured Environment</h5>
                  <p className="body-2">
                    The city is designed for children’s safety and comfort, with
                    clear routes, supervised zones, and structured experiences
                    that allow parents to relax while kids explore and grow.
                  </p>
                </div>
              </div>

              {/* END CONTENT */}
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
