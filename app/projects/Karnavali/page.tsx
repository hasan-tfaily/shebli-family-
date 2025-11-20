
import Image from "next/image";
import React from "react";



export default function KarnavaliPage() {  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt=""
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
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              <div className="blog-details-top" >
                {/* <a href="#" className="tag label text-btn-uppercase">
                  Finance
                </a> */}
                <h2 style={{color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', padding: '20px 0', margin: 0}}>
                  {/* {blog.title?.split(" ").slice(0, 4).join(" ") ??
                    "How to Effectively Manage"}{" "}
                  <br />
                  {blog.title?.split(" ").slice(4).join(" ") ??
                    "Business Cash Flow"} */}
                    Karnavali
                </h2>
                {/* <div className="meta">
                  <a href="#" className="meta-content">
                    <div className="icon">
                      <i className="icon-calendarBlank" />
                    </div>
                    <div className="text body-2">February 28, 2025</div>
                  </a>
                  <a href="#" className="meta-content">
                    <div className="icon">
                      <i className="icon-user" />
                    </div>
                    <div className="text body-2">Tony Nguyen</div>
                  </a>
                </div> */}
              </div>
              <div className="image-blog">
                <Image
                  src={"/image/karnavali/karnavali 1.jpg"}
                  alt=""
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>
              <div className="desc-blog">
                <h5 className="title-desc">
                    The ultimate indoor carnival experience — reinvented for all age groups.
                </h5>
                  <p className="body-2">
                   Karnavali is a dynamic, indoor Family Entertainment Center designed as a multi-anchor<br/>
                   attraction that brings the energy, excitement, and magic of a carnival into a modern,<br/>
                   immersive indoor setting. With major rides, arcades, simulators, active play zones, and<br/>
                   entertainment experiences for every age bracket, Karnavali offers a vibrant world of<br/>
                   fun under one roof.
                  </p>
                <p className="body-2">
                  From heart-racing attractions to classic carnival snacks, the environment is crafted to<br/>
                  engage families, teens, and young children alike, making it a go-to destination for<br/>
                  unforgettable shared moments.
                </p>
              </div>
              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/karnavali/karnavali 2.png"
                    alt=""
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/karnavali/karnavali 3.png"
                    alt=""
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
              </div>
              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">
                    A Multisensory Indoor Carnival
                  </h5>
                  <p className="body-2">
                    Karnavali blends thrill rides, interactive games, sensory play, and themed<br/>
                    entertainment into an experience that appeals to a wide audience:
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">
                   Entertainment
                  </h5>
                  <p className="body-2">
                   <ul>Children can choose between a wide range of activities, including: 
                       <li>- Thrilling Rides &amp; Simulators</li>
                       High-energy attractions and magical simulators that captivate both kids and adults.
                       <li>- Classic Carnival Treatsl</li>
                       Popcorn, cotton candy, hot dogs, caramel apples, pretzels, and more; enhancing the<br/>
                       nostalgic carnival atmosphere.
                       <li>- Toddler & Young Kids Zone</li>
                       Soft play, face painting, balloon sculpting, arts and crafts, and a colorful<br/>
                       carnival-themed play area designed specifically for the little ones.
                       <li>- Kids & Teens Action Zone </li>
                       A robust variety of games and experiences, from arcades and family rides to laser<br/>
                       maze adventures, wall climbing, and competitive play.
                       <li>- Redemption Zone</li>
                       Skill-based and interactive novelty games offering exciting rewards, appealing to<br/>
                       children, teens, and adults.
                       <li>- Active Gaming Zone</li>
                       Featuring the latest video games, driving simulators, sports and dancing games, and<br/>
                       kiddy rides for younger guests.<br/><br/>
Karnavali is built to cater to different personalities, interests, and age groups —<br/>
ensuring every visitor finds their unique version of fun.


                
                   
                   </ul>
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">
                    Concept Vision
                  </h5>
                  <p className="body-2">
                    Karnavali aims to create a one-of-a-kind indoor entertainment venue where children,<br/>
                    teens, and families enjoy diverse activities inspired by the spirit of a joyful carnival.<br/>
                    Guests step into a world filled with color, laughter, motion, and excitement; an escape<br/>
                    from routine into a place where imagination takes the lead.
                  </p>
                </div>
              </div>
              <div className="desc-blog">
                <h5 className="title-desc">Activities</h5>
                <p className="body-2">
                  Karnavali offers a wide range of engaging activities, including but not limited to:
                  <ul>
                    <li>- Major Rides</li>
                    <li>- Arcades</li>
                    <li>- Family Rides</li>
                    <li>- Wall Climbing</li>
                    <li>- Trampoline</li>
                    <li>- Simulators</li>
                    <li>- Sky Trail</li>
                    <li>- Rope Course</li>
                    <li>- Laser Tag</li>
                    <li>- Karting</li>
                    <li>- Esports</li>
                    <li>- Mirror Maze</li>
                    <li>- Zero Gravity</li>
                    <li>- Circus Zone</li>
                  </ul>
                </p>
              </div>
              {/* <div className="tab-list">
                <div className="left tab-item">
                  <div className="text">Tag:</div>
                  <div className="tabs-list">
                    <a href="#" className="tabs-item caption-1">
                      Finance
                    </a>
                    <a href="#" className="tabs-item caption-1">
                      Consulting
                    </a>
                  </div>
                </div> */}
                {/* <div className="right tab-item">
                  <div className="text">Share this post:</div>
                  <ul className="tf-social radius-50 style-border g-12 color-on-suface-container">
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-messenger" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-x" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-ig1" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="pre-next-blog">
                <div className="pre pre-next-blog-item">
                  <a href="#" className="pre-next-btn">
                    PREVIOUS
                  </a>
                  <h6>
                    <a href="#" className="name-blog">
                      Increasing Profit Margins with Efficient
                      <br />
                      Business Operations
                    </a>
                  </h6>
                </div>
                <div className="line" />
                <div className="next pre-next-blog-item">
                  <a href="#" className="pre-next-btn">
                    NEXT
                  </a>
                  <h6>
                    <a href="#" className="name-blog">
                      Navigating Market Trends to Stay
                      <br />
                      Competitive
                    </a>
                  </h6>
                </div>
              </div> */}
              {/* <Comments />
              <CommentForm /> */}
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
