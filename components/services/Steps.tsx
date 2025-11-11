import React from "react";

export default function Steps() {
  return (
    <>
      <h4 className="title-content mb-16">Launch Process</h4>
      {/* <div className="desc mb-32 body-2 color-on-suface-variant-1">
        Our approach combines personalized strategies, data-driven insights, and
        dedicated support to help you reach your financial goals. Each step is
        crafted to maximize growth, reduce risk, and build lasting financial
        confidence.
      </div> */}
      <div className="process-list style-column">
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-ChartPieSlice" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Site Selection
              </a>
            </h5>
            {/* <div className="desc body-2 color-on-suface-variant-1">
              We start by assessing your financial situation and setting
              realistic goals, creating a solid
              <br />
              foundation for a customized plan.
            </div> */}
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-Crosshair1" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Design & Layout
              </a>
            </h5>
            {/* <div className="desc body-2 color-on-suface-variant-1">
              Using insights from our assessment, we develop a unique strategy
              focused on asset growth, risk management, and long-term success.
            </div> */}
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-ChartLineUp" />
          </div>
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Construction & Fit‑Out
              </a>
            </h5>
            {/* <div className="desc body-2 color-on-suface-variant-1">
              We regularly review and adapt your plan to stay aligned with your
              evolving goals, ensuring you stay on track to lasting success.
            </div> */}
          </div>
        </div>

 <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-gitDiff" />
          </div>
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Recruitment & Training
              </a>
            </h5>
          
          </div>
        </div>


         <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-arrowclockwise" />
          </div>
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Pre‑Launch Marketing
              </a>
            </h5>
            
          </div>
        </div>


         <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-MagnifyingGlass" />
          </div>
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Grand Opening
              </a>
            </h5>
            
          </div>
        </div>

      </div>
    </>
  );
}
