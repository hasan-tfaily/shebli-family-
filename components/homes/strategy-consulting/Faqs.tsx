import React from "react";

export default function Faqs() {
  return (
    <section className="section-faqs h-3 tf-spacing-17">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section m-lr-100 mb-36">
              {/* <div className="text-anime-wave">
                <a href="#" className="tag label text-btn-uppercase">
                  FAQs
                </a>
              </div> */}
              <h3 className="text-anime-wave mb-12">
                Activities
              </h3>
            </div>
            <div className="wg-according style-border m-lr-100" id="According">
              <div className="according-item">
                <h5>
                  <a
                    href="#according-1"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    Social Bowling and AR Bowling
                    <span />
                  </a>
                </h5>
                <div
                  id="according-1"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                      A high-energy bowling experience designed for social groups and competitive fun, enhanced with atmospheric lighting and music.
                    </p>
                  </div>
                </div>
              </div>
              <div className="according-item">
                <h5>
                  <a
                    href="#according-2"
                    data-bs-toggle="collapse"
                    className="title-according"
                  >
                    Retro Arcade Zone
                    <span />
                  </a>
                </h5>
                <div
                  id="according-2"
                  className="collapse show"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     A mix of classic arcade titles and modern hits, delivering nostalgia and excitement for all generations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="according-item">
                <h5>
                  <a
                    href="#according-3"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    Immersive Gaming & Simulators
                    <span />
                  </a>
                </h5>
                <div
                  id="according-3"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                      Sports simulators, VR games, interactive screens, and digital game experiences inspired by global entertainment leaders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="according-item">
                <h5>
                  <a
                    href="#according-4"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    Mini Golf & Casual Play
                    <span />
                  </a>
                </h5>
                <div
                  id="according-4"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                      Fun and social mini-golf experiences and table-based games that encourage friendly competition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="according-item">
                <h5>
                  <a
                    href="#according-5"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    Karaoke & Live Entertainment Stage
                    <span />
                  </a>
                </h5>
                <div
                  id="according-5"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     A dedicated performance zone featuring karaoke, DJ sets, live music, and event nights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="according-item">
                <h5>
                  <a
                    href="#according-5"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    Interactive Dining Experience
                    <span />
                  </a>
                </h5>
                <div
                  id="according-5"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     Themed dining areas where food and entertainment merge, complete with interactive game tables, vibrant menus, and a lively atmosphere.
                    </p>
                  </div>
                </div>
              </div>

              <div className="according-item">
                <h5>
                  <a
                    href="#according-5"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    Social Pool, Snooker & Darts
                    <span />
                  </a>
                </h5>
                <div
                  id="according-5"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     Classic social games reimagined with modern ambiance, digital scoring, and themed environments.
                     </p>
                  </div>
                </div>
              </div>

              <div className="according-item">
                <h5>
                  <a
                    href="#according-5"
                    data-bs-toggle="collapse"
                    className="title-according collapsed"
                  >
                    Retro-Industrial Art Installations
                    <span />
                  </a>
                </h5>
                <div
                  id="according-5"
                  className="collapse"
                  data-bs-parent="#According"
                >
                  <div className="according-content">
                    <p>
                     Nostalgic and visually striking art pieces, neon work, and themed installations that elevate the venue’s identity and social media appeal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
