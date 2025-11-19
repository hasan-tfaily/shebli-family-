import Image from "next/image";
import React from "react";

export default function UrbanVillage() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt=""
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
                  Urban Village
                </h2>
              </div>
              <div className="image-blog">
                <Image
                  src={"/image/UrbanVillage/urban-village 1.jpg"}
                  alt=""
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>
              {/* Intro paragraph */}
              <div
                className="desc-blog"
                style={{ marginTop: "24px", marginBottom: "32px" }}
              >
                <h5
                  className="title-desc"
                  style={{ marginBottom: "12px" }}
                >
                  Facility
                </h5>
                <p className="body-2" style={{ margin: 0 }}>
                  The village-like compound will cater to a variety of needs and
                  bring together the community in a way which enables every
                  person to meet his own personal needs in a joint setting.
                  <br />
                  <br />
                  The facility will be composed of different sections targeted
                  at different audiences and providing different services
                  experiences:
                </p>
              </div>



              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/UrbanVillage/urban-village 2.jpg"
                    alt=""
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/UrbanVillage/urban-village 3.jpg"
                    alt=""
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
              </div>

              <div className="list-desc">
                {/* Block 1 */}
                <div
                  className="desc-blog"
                  style={{ marginTop: "32px", marginBottom: "32px" }}
                >
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    1. Toddlers and young kids – Large soft play area
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    Mothers who want to provide entertainment for their young
                    children, or want an activity to keep their children engaged
                    while they shop in the department store or have lunch or a
                    coffee with friends may do so here.
                    <br />
                    <br />
                    Known for their physical benefits as well as their ability
                    to keep young kids having fun for hours, this area will be a
                    large soft play zone including slides, bouncy houses,
                    trampolines, monkey bars, a jungle gym, a low climbing wall,
                    and a ball pit.
                  </p>
                </div>

                {/* Block 2 */}
                <div
                  className="desc-blog"
                  style={{ marginBottom: "32px" }}
                >
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    2. Kids
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    KidzMondo is an edutainment indoor theme park based on the
                    concept of vocational role play. It caters for kids aged 4
                    to 14, bridging the gap between toddlers and teens.
                    <br />
                    <br />
                    KidzMondo Ville will offer young guests simultaneously
                    informative and entertainment experiences to keep them busy
                    from a few hours up to a full day.
                  </p>
                </div>

                {/* Block 3 */}
                <div
                  className="desc-blog"
                  style={{ marginBottom: "32px" }}
                >
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    3. Preteens and Teenagers – Food court and hangout area /
                    Escape rooms / Outdoor sports courts (football, basketball,
                    skate rink, parkour zone)
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    Teens and young adults want a place to hang out where they
                    can feel independent and relaxed. At the same time, parents
                    want to know that they are safe at all times and making
                    healthy dietary and recreational choices.
                    <br />
                    <br />
                    Here, they will be offered a secured food court offering
                    plenty of meal options to meet different tastes, as well as
                    fun, structured, and physically and mentally stimulating
                    activities like escape rooms and outdoor sports.
                  </p>
                </div>

                {/* Block 4 */}
                <div
                  className="desc-blog"
                  style={{ marginBottom: "32px" }}
                >
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    4. Families and extended groups – Restaurant / International
                    cuisine / Cafés
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    Whether to have coffee with friends during a busy weekday, a
                    business lunch, or a family Sunday, adults and families will
                    have available to them a variety of F&amp;B choices catering
                    to different needs and occasions.
                    <br />
                    <br />
                    Additionally, the facility will have an eatertainment
                    concept, wherein adults as well as their kids will be able
                    to enjoy a meal while playing some games and having fun.
                    <br />
                    <br />
                    For adults, this will include a sports bar concept,
                    offering bowling, darts, baby foot, billiards, and such
                    games.
                  </p>
                </div>

                {/* Block 5 */}
                <div
                  className="desc-blog"
                  style={{ marginBottom: "32px" }}
                >
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    5. Young adults and adults – Gym and Spa
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    To attract the widest range of audience and open up the
                    facility to daily visitors, a gym and spa installment will
                    offer guests monthly memberships as well as varied body
                    treatments.
                  </p>
                </div>

                {/* Block 6 */}
                <div
                  className="desc-blog"
                  style={{ marginBottom: "32px" }}
                >
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    6. Shoppers – Department store
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    An open area department store will offer casual shoppers fun
                    shopping experiences close to home, or while they wait for
                    their kids to finish playing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
