import Link from "next/link";

import Benefits from "@/components/common/Benefits";
import About from "@/components/common/About";
import React from "react";
import History from "@/components/otherPages/History";
import Features from "@/components/common/Features2";
import Testimonials from "@/components/otherPages/Testimonials";
import Cta from "@/components/common/Cta2";
import Awards from "@/components/common/Awards";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
import Process from "@/components/common/Process";
export const metadata: Metadata = {
  title:
    "About us || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-4">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="About Us" />
            <h2 className="title-page-title">About Us</h2>
            <div className="sub-title body-2">
              Kidz Holding: Creating Parks of Imagination, <br />
              Edutainment and Fun <br/><br/>
              Kidz Holding is a regional leader in the creation, development, and management of<br/> 
              family entertainment destinations and edutainment concepts. We design immersive<br/>  
              worlds where each member of the family connects through meaningful shared experiences.<br/> <br/> 
              
              Our diverse portfolio spans indoor and outdoor attractions, edutainment cities, nature<br/>  
              parks, themed experiences, and hybrid leisure concepts. Each concept has its own story<br/> 
              and is designed to serve all age brackets, from toddlers to teens, young adults,<br/>  
              and families ensuring that every visitor finds an experience tailored to their interests,<br/>  
              abilities, and stage of growth.<br/> <br/> 

              With expertise covering concept creation, turnkey development, franchise<br/>  
              management, and operational leadership, we support partners from the earliest idea to<br/> 
              full operational maturity. Operating across multiple regional markets, Kidz Holding is<br/>  
              committed to crafting experiences that are culturally relevant, emotionally engaging,<br/> 
              and future-ready.<br/> <br/> 


              Every project we undertake is built on a foundation of creativity, innovation, safety, and<br/> 
              strong educational value — ensuring long-term success for our partners and<br/>
              unforgettable memories for our guests.

            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Benefits />
        {/* <About /> */}
        <History />
        <Features hasBorder parentClass="section-why-choose h-2 page-about" />

        <Process />

        {/* <Testimonials /> */}
        <Cta />
        {/* <Awards /> */}

      </div>
    </>
  );
}
