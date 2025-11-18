import Blogs3 from "@/components/blogs/Blogs3";
import React from "react";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Blogs || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <Breadcumb pageName="Blog" />
                <h2 className="title-page-title">Blog </h2>
                <div className="sub-title body-2">
                  Welcome to the Kidz Holding Blog. Your window into the world of 
                  <br />
                 edutainment, family learning, and innovation across our cities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2">
        <Blogs3 />
      </div>
    </>
  );
}
