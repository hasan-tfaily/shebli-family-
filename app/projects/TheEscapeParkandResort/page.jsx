import Image from "next/image";
import React from "react";

export default function TheEscapeParkandResort() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/page-title-4.jpg"
          alt="The Escape Park & Resort Hero"
          className="lazyload"
          width={1920}
          height={804}
        />
      </div>

      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
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
                  The Escape Park &amp; Resort
                </h2>
              </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src="/image/blog/image-blog-4.jpg"
                  alt="The Escape Park & Resort"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              <div className="desc-blog">
                <p className="body-2">
                  The Escape Park &amp; Resort is a hybrid destination that
                  combines outdoor adventure, immersive storytelling, and family
                  relaxation. Guests can enjoy interactive challenges, themed
                  zones, and nature-inspired experiences in a safe and engaging
                  environment.
                </p>
                <p className="body-2">
                  From escape-style missions and activity trails to leisure
                  corners and dining options, the resort is designed to offer
                  something for every family member while encouraging teamwork,
                  creativity, and exploration.
                </p>
              </div>

              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-5.jpg"
                    alt="Escape Park Activity 1"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-6.jpg"
                    alt="Escape Park Activity 2"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
              </div>

              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">1. Adventure-Focused Experiences</h5>
                  <p className="body-2">
                    Guests explore themed challenges and missions across the
                    park, from puzzle-based escape routes to physical
                    activities. Each zone is crafted to balance fun, suspense,
                    and safe exploration.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">2. Family-Centered Design</h5>
                  <p className="body-2">
                    The resort is built with families in mind, offering shared
                    experiences that bring parents and children together in
                    cooperative games, storytelling paths, and relaxing rest
                    areas.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">3. Immersive Storytelling</h5>
                  <p className="body-2">
                    The park&apos;s narrative-driven design transforms each
                    visit into a memorable story. Guests are not just visitors,
                    but active characters in an unfolding adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
