
import Image from "next/image";
import React from "react";

export default function KidzAcademyPage() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/page-title-4.jpg"
          alt="KidzAcademy Hero"
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
                  KidzAcademy
                </h2>
              </div>

              <div className="image-blog">
                <Image
                  src="/image/blog/image-blog-4.jpg"
                  alt="KidzAcademy learning environment"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              <div className="desc-blog">
                <p className="body-2">
                  KidzAcademy is the educational heart of Kidz Holding — a
                  dedicated space where children learn by doing. Through
                  hands-on workshops, interactive classes, and project-based
                  activities, kids build confidence, creativity, and real-world
                  skills in a fun, safe environment.
                </p>
                <p className="body-2">
                  From science and technology to arts, languages, and life
                  skills, every experience at KidzAcademy is designed to spark
                  curiosity and nurture each child’s unique talents, while
                  helping them collaborate, communicate, and think critically.
                </p>
              </div>

              <div className="cols-img">
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-5.jpg"
                    alt="KidzAcademy creative workshop"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
                <div className="image-blog">
                  <Image
                    src="/image/blog/image-blog-6.jpg"
                    alt="KidzAcademy STEM activity"
                    className="lazyload"
                    width={444}
                    height={334}
                  />
                </div>
              </div>

              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">
                    1. Skill-Based Learning Experiences
                  </h5>
                  <p className="body-2">
                    Children participate in workshops that focus on real skills:
                    communication, problem-solving, creativity, and teamwork.
                    Whether they’re coding, presenting, building, or performing,
                    each activity is structured with clear learning outcomes.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">
                    2. Balanced Focus on STEAM & Life Skills
                  </h5>
                  <p className="body-2">
                    KidzAcademy blends STEAM (Science, Technology, Engineering,
                    Arts, and Mathematics) with essential life skills such as
                    emotional intelligence, leadership, and collaboration. Kids
                    learn how to think, not just what to memorize.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">
                    3. Safe, Supportive & Engaging Environment
                  </h5>
                  <p className="body-2">
                    Every class is guided by trained instructors who understand
                    how children learn and play. Spaces are designed to be
                    welcoming and safe, allowing kids to explore freely while
                    parents feel confident and reassured.
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
