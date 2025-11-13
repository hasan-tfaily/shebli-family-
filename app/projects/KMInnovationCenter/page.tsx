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
                  The village-like compound will cater to a variety of needs and bring together the community in a way which enables every person to meet his own personal needs in a joint setting. 
                  <br/> <br/>
                  The facility will be composed of different sections targeted at different audiences and providing different services experiences:
                </p>
                {/* <p className="body-2">
                  From coding and robotics to interactive design and problem-
                  solving challenges, every experience is designed to help kids
                  think like innovators: curious, bold, and solution-oriented.
                </p> */}
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
                    Tech Education
                  </h5>
                  <p className="body-2">
                    Mothers who want to provide entertainment for their young children, or want an activity to keep their children engaged while they shop in the department store or have lunch or a coffee with friends may do so here. 
                    <br/><br/>
                    Known for their physical benefits as well as their ability to keep young kids having fun for hours, this area will be a large soft play zone including slides, bouncy houses, trampolines, monkey bars, a jungle gym, a low climbing wall, and a ball pit.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">
                    Some of the activities available will include: 

                  </h5>
                  <p className="body-2">
                    <li>
                      <ul>Entrepreneurship</ul>
                      <ul>Design thinking</ul>
                      <ul>Coding</ul>
                      <ul>Robotics</ul>
                      <ul>Artificial Intelligence</ul>
                      <ul>Augmented and Virtual Reality</ul>
                      <ul>Cyber Safety</ul>
                      <ul>Gaming</ul>
                    </li>
                    <p>
These technologies make the experience more stimulating and attractive to children 
and teenagers up until the age of 15.</p>
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
