import Image from "next/image";
import React from "react";

export default function TheEscapeParkandResort() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
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
                  src="/image/resortAndPark/resort pic 1.jpg"
                  alt="The Escape Park & Resort"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              <div className="desc-blog">
                <h5 className="title-desc">
                  A natural sanctuary designed for families to reconnect,
                  recharge, and rediscover,
                  <br />
                  the joy of outdoor play.
                </h5>
                <p className="body-2">
                  The Escape Park & Resort is a green refuge that transports
                  families into a world of lush
                  <br />
                  landscapes, flowing water, and immersive nature experiences.
                  Built as a multi-sensory
                  <br />
                  destination, it invites children, teens, and adults to step
                  away from the speed and noise
                  <br />
                  of modern life and enjoy meaningful moments together in the
                  outdoors.
                </p>
                {/* <h5 className="title-desc">Objective</h5> */}
                <p className="body-2">
                  Grounded in the principles of nature-based learning and
                  wellness, the park offers an
                  <br />
                  environment where children can explore, play, and develop
                  essential motor and
                  <br />
                  sensory skills. Studies show that outdoor environments rich in
                  natural elements
                  <br />
                  enhance creativity, boost physical activity, and contribute to
                  overall emotional and
                  <br />
                  mental wellbeing all of which form the cornerstone of this
                  concept.
                </p>
              </div>

              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/resortAndPark/resort pic 2.jpg"
                    alt="Escape Park Activity 1"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/resortAndPark/resort pic 3.jpg"
                    alt="Escape Park Activity 2"
                    className="lazyload"
                      width={1920}
          height={1080}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
          }}
                  />
                </div>
              </div>

              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">The Facility</h5>
                  <p className="body-2">
                    Designed as a fully integrated nature retreat, The Escape
                    Park & Resort features:
                    <br />
                    - A scenic pond, surrounded by trees, flowers, and walking
                    paths
                    <br />
                    - Gazebos and shaded relaxation areas
                    <br />
                    - A man-made river ideal for family fishing activities
                    <br />
                    - Indoor and outdoor dining areas
                    <br />
                    - A dedicated birthday and events venue
                    <br />
                    - Private rental zones for barbecues, picnics, and camping
                    <br />
                    - Animal enclosures for hands-on exploration and learning
                    <br />
                    - A resort area with bungalows and a swimming pool
                    <br />
                    <br />
                    Families can enjoy a serene lunch by the pond, watch birds
                    gathered around the
                    <br />
                    enclosures, or let children explore the outdoor playground
                    before attempting the
                    <br />
                    elevated obstacle course in the trees. Fathers and sons can
                    fish together, while
                    <br />
                    younger guests enjoy pony rides or nature discovery trails.
                    <br />
                    <br />
                    Perched above the pond is a luxurious signature restaurant,
                    offering refined cuisine
                    <br />
                    with sweeping sunset views in both indoor and outdoor
                    seating areas.
                    <br />
                    <br />
                    Next to the restaurant lies the botanical zone, which
                    includes greenhouses, orchards,
                    <br />
                    and small open-air agricultural plots where families can
                    learn about planting,
                    <br />
                    harvesting, and eco-friendly practices.
                    <br />
                    <br />
                    Nearby, an oval amphitheater acts as a natural stage for
                    performances, shows, and
                    <br />
                    children’s birthday celebrations.
                    <br />
                    <br />
                    Further down the hillside sits the adventure zone, packed
                    with exhilarating outdoor
                    <br />
                    sports and activities for all ages. At the lowest level,
                    families will find the camping and
                    <br />
                    barbecue equipment depot, supporting private rentals for
                    overnight or daytime nature
                    <br />
                    outings.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">Activities</h5>
                  <p className="body-2">
                    <ul>
                      The Escape Park & Resort offers a wide range of mentally
                      and physically stimulating
                      <br />
                      experiences, including:
                      <br />
                      <br />
                      <h4>Adventure &amp; Movement</h4>
                      <li>- Ropes course</li>
                      <li>- Zipline</li>
                      <li>- Underground maze</li>
                      <li>- Wall Climbing</li>
                      <li>- Biking</li>
                      <li>- Truck and barrel rides</li>
                    </ul>
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">Nature &amp; Wellness</h5>
                  <p className="body-2">
                    <ul>
                      <li>- Fishing</li>
                      <li>- Gardening</li>
                      <li>- Animal exploration</li>
                      <li>- Botanical learning</li>
                      <li>- Fruit harvesting(seasonal)</li>
                    </ul>
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">Crafts &amp; Skills</h5>
                  <p className="body-2">
                    <ul>
                      <li>- Honey making</li>
                      <li>- Jewel extraction</li>
                      <li>- Interactive nature-based games</li>
                    </ul>
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">
                    Sports &amp; Precision Activities
                  </h5>
                  <p className="body-2">
                    <ul>
                      <li>- Archery</li>
                    </ul>
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
