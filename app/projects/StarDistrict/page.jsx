import Image from "next/image";
import React from "react";

export default function StarDistrict() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
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
                  src={"/image/starDistrict/star district 1.jpg"}
                  alt="Star District"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* Intro description */}
              <div className="desc-blog">
                <h5 className="title-desc">Concept</h5>
                <p className="body-2">
                  Star  District is  the  ideal platform  for  children  and 
                  teenagers who want to experience  stardom.
                  <br />
                  <br />
                  It is a one stop family entertainment center where mothers can
                  take their toddlers to play, children and teenagers can have
                  their fifteen minutes of fame and shine in the spotlight,
                  where mothers and their daughters can bond over girly
                  activities, and where teenagers can hang out and have fun.
                  <br />
                  <br />
                  It is a forum where children and teenagers can interact with
                  different international brands through engaging in sponsored
                  activities and enjoying a unique Hollywood-esque shopping
                  experience.
                </p>
                {/* <p className="body-2">
                  Through immersive studios, themed zones, and guided activities,
                  children and teens get the chance to step into the spotlight,
                  experiment with different roles, and build skills that stay
                  with them long after the visit.
                </p> */}
              </div>

              {/* Two side images */}
              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/starDistrict/star district 2.jpg"
                    alt="Star District Activity 1"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/starDistrict/star district 3.jpg"
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
                  {/* <h5 className="title-desc">Overview</h5> */}
                  <p className="body-2">
                    Star District is the ultimate fame-experience destination
                    where children and teenagers
                    <br />
                    step into the spotlight and live the stardom they dream of.
                    Designed as an immersive
                    <br />
                    activation and entertainment hub, Star District blends
                    performing arts, creativity,
                    <br />
                    fashion, media, and lifestyle experiences into one dazzling
                    world.
                    <br />
                    <br />
                    It is a one-stop family entertainment center where toddlers
                    can play,
                    <br />
                    kids and teens can shine in their “fifteen minutes of fame,”
                    mothers and daughters can enjoy bonding
                    <br />
                    activities, and teenagers can hang out, create, and express
                    themselves.
                    <br />
                    {/* <br />A crew of  professionals  at  Star  District helps
                    children discover, explore, and expand their talents,
                    whether they are singing, acting, dancing, presenting,
                    design, or any other talent.
                    <br />
                    <br />
                    They will be given continuous opportunities to perform and
                    display their talents and what they have learned. All kinds
                    of props will be available to  them  so  they  may  fully
                    experience  their moment in the spotlight. */}
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">Where Kids Live the Fame</h5>
                  <p className="body-2">
                    Star District invites young guests to experience what it
                    truly means to be a star.
                    <br />
                    Beyond the glamour, they learn how a star looks, walks,
                    talks, performs, and expresses
                    <br />
                    their talent. Through hands-on experiences and professional
                    guidance, childre
                    <br />
                    nand teens explore the skills needed to shine in front of an
                    audience.
                    <br />
                    <br />
                    A dedicated team of creative coaches helps them discover and
                    develop their
                    <r />
                    talents—whether in music, performing, fashion, design, or
                    media. With themed sets,
                    <br />
                    professional equipment, and endless props, every child gets
                    a chance to perform,
                    <br />
                    create content, and enjoy their moment in the spotlight.
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">Experiences</h5>
                  <p className="body-2">
                    <ul>
                      <h6>Performance & Stage Arts</h6>
                      <li>- Singing</li>
                      <li>- Dancing</li>
                      <li>- Acting</li>
                      <li>- Music & instruments</li>
                      <li>- Djing</li>
                      <li>- TV Presenter</li>
                      <li>- Content Creation</li>
                      <li>- Live Performances</li>

                      <h6>Fashion, Beauty & Design</h6>

                      <li>- Modeling & runway</li>
                      <li>- Fashion Design</li>
                      <li>- Jewelry Design</li>
                      <li>- Handbag Design</li>
                      <li>- Shoe Design</li>
                      <li>- Makeup & beauty</li>
                      <li>- Styling sessions</li>
                      <li>- Perfume creation</li>

                      <h6>Creative Studios</h6>

                      <li>- Photography studio</li>
                      <li>- Video production</li>
                      <li>- Green-screen experiences</li>
                      <li>- Digital media creation</li>
                      <li>- Character creation & storytelling</li>

                      <h6>Sports & Lifestyle Fame</h6>

                      <li>- Footballer experience</li>
                      <li>- Car racer experience</li>
                      <li>- Active lifestyle challenges</li>
                      <li>- Celebrity-style fitness moments</li>
                    </ul>
                    <ul>
                      At the same time, Guests can also benefit from a variety
                      of services to include:
                      <li>• SPA</li>
                      <li>• Beauty Salon</li>
                      <li>• Birthday Venues</li>
                    </ul>
                  </p>
                </div>

                {/* <div className="desc-blog">
                  <h5 className="title-desc">
                    3. Confidence & Self-Expression
                  </h5>
                  <p className="body-2">
                    Star District is designed to help kids feel seen and heard.
                    Whether they&apos;re shy beginners or natural performers,
                    every child gets the chance to shine, try something new, and
                    celebrate their unique personality.
                  </p>
                </div> */}
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
