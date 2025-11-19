import Image from "next/image";
import React from "react";

export default function KidzMondoPage() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
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
                  src="/image/kidzMondo/Kidz-mondo-1.png"
                  alt="KidzMondo"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* INTRO SECTION */}
              <div className="desc-blog">
                <p className={"bodytitle"}>Overall Concept</p>
                <p className="body-2">
                  KidzMondo is a replica of a real-life city which provides
                  children between the ages of 2 to 14 with role play activities
                  that are designed to be fun and pedagogical, based on the
                  ‘edutainment’ or playful learning concept.
                </p>
<p className="body-2">
                  It is an ideal forum where social rules and values are promoted and ingrained in children to prepare them to behave as good adult citizens would in real life.
                </p>

                <p className={"bodytitle"}>Objective</p>
                <p className="body-2">
                  KidzMondo aims to compliment local school curricula and seeks
                  to teach children basic citizenship values and rules,
                  enlightening them about the society they live in today.
                </p>
              </div>

              {/* TWO IMAGES */}
              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/kidzMondo/kidzMondo2.png"
                    alt="KidzMondo Activity 1"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/kidzMondo/kidzMondo3.png"
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
                  <h5 className="title-desc">Education</h5>
                  <p className="body-2">
                    It is an established fact that children learn best through
                    play and experiencing real hands-on activities.
                    <br />
                    <br />
                    The range of playful activities inside KidzMondo is
                    exclusively created and constructed to help, encourage and
                    advance physical growth while stimulating intellectual
                    growth.
                    <br />
                    <br />
                    The KidzMondo Educational Curriculum improves the
                    development of skills and attitudes while also motivating
                    creative thinking and enhancing self-esteem and
                    self-confidence levels.
                    <br />
                    <br />
                    KidzMondo also teaches financial literacy by establishing
                    its own economy, where kids exchange Kidlars, the local city
                    currency, learning about money and how to utilize it.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">Entertainment</h5>
                  <p className="body-2">
                    Children can choose between 120+ different professions which
                    are practiced in replica of the most representative
                    establishments in an actual city; an airport, a bank,
                    factories, a theater, shops, a police station, a fire
                    department, a newspaper publisher, a hotel, a TV studio, a
                    radio station, a gas station, a racetrack and many more…
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">Edutainment Competencies</h5>

                  {/* Optional intro text */}
                  <p className="body-2">
                    The KidzMondo experience develops a wide range of
                    competencies:
                  </p>

                  {/* VALID LIST WITH BULLET POINTS */}
                  <ul className="body-2">
                    <li>- Cognitive Development</li>
                    <li>- Emotional Intelligence</li>
                    <li>- Psychomotor Development</li>
                    <li>- Social Development</li>
                    <li>- Financial Literacy
                      <ul>
                        <li>- Currency and Bills</li>
                        <li>- Bank</li>
                        <li>- Kidlar Store</li>
                      </ul>
                    </li>
                  </ul>
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
