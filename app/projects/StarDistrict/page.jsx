import Image from "next/image";
import React from "react";

export default function StarDistrict() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/projects/ourprojects.png"
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
                  src={"/image/starDistrict/starDistrict1.jpg"}
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
                    src="/image/starDistrict/starDistrict2.jpg"
                    alt="Star District Activity 1"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/starDistrict/starDistrict3.jpg"
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
                  <h5 className="title-desc">Overview</h5>
                  <p className="body-2">
                    Star District is a venue aimed at helping children and teens
                    become the stars they have always dreamed of becoming.
                    <br />
                    <br />
                    There is so much more to being a star than meets the eye. A
                    star needs to look, walk, talk, and act the part. At this
                    center for the arts, young boys and girls, as well as teens
                    are introduced to all the necessary skills needed to become
                    a star.
                    <br />
                    <br />A crew of  professionals  at  Star  District helps
                    children discover, explore, and expand their talents,
                    whether they are singing, acting, dancing, presenting,
                    design, or any other talent.
                    <br />
                    <br />
                    They will be given continuous opportunities to perform and
                    display their talents and what they have learned. All kinds
                    of props will be available to  them  so  they  may  fully
                    experience  their moment in the spotlight.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">The Experiences</h5>
                  <p className="body-2">
                    <li>
                      Guests can choose between a wide range of activities to
                      include:
                      <ul>• Singing</ul>
                      <ul>• Dancing</ul>
                      <ul>• Acting</ul>
                      <ul>• Music</ul>
                      <ul>• Modeling</ul>
                      <ul>• TV Presenter</ul>
                      <ul>• Djing</ul>
                      <ul>• Photography</ul>
                      <ul>• Fashion Designer</ul>
                      <ul>• Jewelry Designer</ul>
                      <ul>• Handbag Designer</ul>
                      <ul>• Footballer</ul>
                      <ul>• Car Racer</ul>
                      <ul>• Shoe Designer</ul>
                      <ul>• Perfume Making</ul>
                      <ul>• And much more...</ul>
                    </li>
                    <li>
                      At the same time, Guests can also benefit from a variety
                      of services to include:
                      <ul>• SPA</ul>
                      <ul>• Beauty Salon</ul>
                      <ul>• Birthday Venues</ul>
                    </li>
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
