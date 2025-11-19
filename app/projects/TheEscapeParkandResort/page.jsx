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
                <h5 className="title-desc">Introduction</h5>
                <p className="body-2">
                  A green refuge, The Escape Park and Resort will transport you
                  to a wonderland of greenery for some much-needed peace and
                  relaxation for the entire family.
                  <br />
                  This concept is built with the intention of immersing
                  children, adults and parents alike in a multi-sensory nature
                  bonding experience, taking you away from the rush and buzz of
                  a fast-paced technology oriented world.
                </p>
                <h5 className="title-desc">Objective</h5>
                <p className="body-2">
                  The Escape Park and Resort will allow your children a chance
                  to participate in their favorite activities while playing
                  outdoors, with all the health benefits associated with
                  physical activity and engaging in nature. 
                  <br />
                  Research shows that when nature elements are incorporated into
                  playgrounds, kids have more fun, are more active and utilize
                  more motor skills.
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
                    width={444}
                    height={334}
                  />
                </div>
              </div>

              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">The Facility</h5>
                  <p className="body-2">
                    The Escape Park and Resort is a nature retreat filled with
                    trees, a pond, flowers, gazebos, a man-made river, an indoor
                    and outdoor lunch area, birthday and events venue, private
                    rental spots for family barbecues and camping trips,
                    enclosures for different kinds of animals, and a resort area
                    with bungalows and a swimming pool.
                    <br />
                    <br />
                    In a beautifully serene atmosphere, families can enjoy a
                    peaceful lunch by the pond, observing the bird enclosures
                    spread throughout the grounds, while their kids ride ponies,
                    play in the outdoor playground, complete an obstacle course
                    up in the trees; fathers and sons can go fishing together on
                    the river.   
                    <br />
                    <br />
                    Uphill of the pond is a luxurious restaurant offering
                    refined cuisine and a sunset view in both an indoor and an
                    outdoor seating area. 
                    <br />
                    <br />
                    At the same level of the restaurant is the botanical zone,
                    containing green houses, fruit tree orchards, and small open
                    air agricultural grounds.
                    <br />
                    <br />
                    This level also contains an oval amphitheater serving as a
                    platform for performances, shows, and kids' birthday
                    parties.  
                    <br />
                    <br />
                    The level further below will feature the adventure zone with
                    fun outdoor sports activities for the entire family.
                    <br />
                    <br />
                    Finally, the lowermost level holds the camping and barbeque
                    gear for private rentals. 
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">Activities</h5>
                  <p className="body-2">
                    <ul>
                      The Escape Park and Resort is equipped with outdoor play
                      equipment, interactive games and other mentally and
                      physically stimulating activities including:
                      <li>• Ropes course</li>
                      <li>• Archery</li>
                      <li>• Honey making</li>
                      <li>• Zipline</li>
                      <li>• Underground maze and jewel extraction  </li>
                      <li>• Fishing</li>
                      <li>• Biking</li>
                      <li>• Animal exploration</li>
                      <li>• Gardening</li>
                      <li>• Truck and barrel rides</li>
                      <li>• And many more...</li>
                    </ul>
                  </p>
                </div>

                {/* <div className="desc-blog">
                  <h5 className="title-desc">3. Immersive Storytelling</h5>
                  <p className="body-2">
                    The park&apos;s narrative-driven design transforms each
                    visit into a memorable story. Guests are not just visitors,
                    but active characters in an unfolding adventure.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
