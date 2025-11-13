
import Image from "next/image";
import React from "react";


export default function UrbanVillage() {
  return (
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
              <div className="blog-details-top">
                {/* <a href="#" className="tag label text-btn-uppercase">
                  Finance
                </a> */}
                <h2 style={{color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', padding: '20px 0', margin: 0}}>
                  {/* {blog.title?.split(" ").slice(0, 4).join(" ") ??
                    "How to Effectively Manage"}{" "}
                  <br />
                  {blog.title?.split(" ").slice(4).join(" ") ??
                    "Business Cash Flow"} */}
                    Urban Village
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
                <h5 className="title-desc">Facility</h5>
                <p className="body-2">
                  
The village-like compound will cater to a variety of needs and bring together the community in a way which enables 
every person to meet his own personal needs in a joint setting. 
<br/><br/>
The facility will be composed of different sections targeted at different audiences and providing different services 
experiences:
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
                    1. Toddlers and young kids – Large soft play area
                  </h5>
                  <p className="body-2">
                    Mothers who want to provide entertainment for their young children, or want an activity to keep their 
                    children engaged while they shop in the department store or have lunch or a coffee with friends may do 
                    so here. 
<br/><br/>
Known for their physical benefits as well as their ability to keep young kids having fun for hours, this area 
will be a large soft play zone including slides, bouncy houses, trampolines, monkey bars, a jungle gym, a 
low climbing wall, and a ball pit.
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">
                    2. Kids
                  </h5>
                  <p className="body-2">
                    KidzMondo is an edutainment indoor theme park based on the concept of vocational role play. It caters 
                    for kids aged 4 to 14, bridging the gap between toddlers and teens. 
<br/><br/>
KidzMondo Ville will offer young guests simultaneously informative and entertainment experiences to 
keep them busy from a few hours up to a full day. 
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">
                    3. Preteens and Teenagers– Food court and hangout area / Escape rooms / Outdoor sports courts 
                    (football, basketball, skate rink, parkour zone)
                  </h5>
                  <p className="body-2">
                   <br/><br/>
Teens and young adults want a place to hang out where they can feel independent and relaxed. At the same time, parents want to know that they are safe at all times and making healthy dietary and recreational choices. 
<br/><br/>
Here, they will be offered a secured food court offering plenty of meal options to meet different tastes, as well as fun, structured, and physically and mentally stimulating activities like escape rooms and outdoor sports. 
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">
                    4. 
Families and extended groups– Restaurant / International cuisine / Cafés
                  </h5>
                  <p className="body-2">
                  Whether to have coffee with friends during a busy weekday, a business lunch, or a family Sunday, adults and families will have available to them a variety of F&B choices catering to different needs and occasions. 
                  <br/><br/>
Additionally, the facility will have an eatertainment concept, wherein adults as well as their kids will be able to enjoy a meal while playing some games and having fun. 
<br/><br/>
For adults, this will include a sports bar concept, offering bowling, darts, baby foot, billiards, and such games.
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">
                    5. Young adults and adults– Gym and Spa
                  </h5>
                  <p className="body-2">
                   
To attract the widest range of audience and open up the facility to daily visitors, a gym and spa 
installment will offer guests monthly memberships as well as varied body treatments. 
                  </p>
                </div>
                <div className="desc-blog">
                  <h5 className="title-desc">
                    6. Shoppers– Department store
                  </h5>
                  <p className="body-2">
                   An open area department store will offer casual shoppers fun shopping experiences close to home, or 
                   while they wait for their kids to finish playing.
                  </p>
                </div>
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
