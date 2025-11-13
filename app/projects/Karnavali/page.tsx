
import Image from "next/image";
import React from "react";



export default function KarnavaliPage() {  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/page-title-4.jpg"
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
                  src={"/image/blog/image-blog-4.jpg"}
                  alt=""
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>
              <div className="desc-blog">
                <h5 className="title-desc">
                    Concept
                </h5>
                  <p className="body-2">
                   Karnavali aims to provide a one-of-a-kind entertainment venue to children and 
                   teens which will provide diversified activities catering to different tastes and  
                   interests, all while giving them the lovely experience of visiting the carnival. 
                  </p>
                {/* <p className="body-2">
                  Test your crisis management plan with regular simulations to
                  ensure that your team knows what to do if an emergency arises.
                  A well-prepared team can minimize downtime and protect your
                  reputation.
                </p> */}
              </div>
              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-5.jpg"
                    alt=""
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-6.jpg"
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
                    Overview
                  </h5>
                  <p className="body-2">
                    Karnavali is an indoor multiple anchor attraction combined with impulse items of rides and games that make your head spin, and simulators that seem magical and appealing to a broader age range of family members. 
                    <br/><br/>In between activities, guests can munch on typical carnival snacks including hot dog, popcorn, cotton candy, caramelized apples and pretzels. 
                    <br/><br/>Toddlers can enjoy face painting, balloon sculpting, arts and crafts, and a carnival themes soft play area catered to their delight. 
                    Older kids have a wild array or activities to choose from designed to suit their diversified interests, including an arcade with family rides, simulators, laser maze, wall climbing etc...
                    <br/><br/>Redemption Zone catering for all ages with interactive and skill based novelty games rewarding players with fun and prizes. 
                    Active Zone with the latest and best loved video games, kiddy rides, driving simulators, sports games and dancing games. 
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">
                   Entertainment
                  </h5>
                  <p className="body-2">
                   <li>Children can choose between a wide range of activities, including: 
                       <ul>Rides</ul>
                       <ul>Climbing Wall</ul>
                       <ul>Arcade . Simulators (sports, movie)</ul>
                       <ul>Sky Trail . Ropes course </ul>
                       <ul>Laser Tag</ul>
                       <ul>Mirror Maze</ul>
                       <ul>Zero Gravity</ul>
                       <ul>Car Racing</ul>
                       <ul>Indoor Roller Coaster</ul>
                       <ul>
Circus zone (face painting, balloon sculpting, soft play, arts and crafts)</ul>
                   
                   </li>
                  </p>
                </div>
                {/* <div className="desc-blog">
                  <h5 className="title-desc">
                    3. Build a Strong Financial Buffer
                  </h5>
                  <p className="body-2">
                    Cash flow is the lifeblood of any business, and during
                    volatile periods, having a strong financial buffer is
                    critical. Ensure your business has access to adequate
                    working capital to cover unforeseen expenses or downturns.
                    This might mean reducing non-essential spending or setting
                    up an emergency fund.
                  </p>
                </div> */}
              </div>
              {/* <div className="desc-blog">
                <h5 className="title-desc">Conclusion</h5>
                <p className="body-2">
                  Managing business risks in a volatile market requires a
                  combination of foresight, preparation, and agility. By
                  conducting thorough risk assessments, diversifying your
                  operations, building financial resilience, staying informed,
                  and having a solid crisis management plan, you can navigate
                  uncertainty and turn potential threats into opportunities for
                  growth.
                </p>
              </div> */}
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
