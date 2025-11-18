import Products from "@/components/products/Products";
import React from "react";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Products || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-11">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Our Products" />
            <h2 className="title-page-title">Our Product</h2>
            <div className="sub-title body-2">
              Discover premium financial tools and resources designed to drive
              your business
              <br />
              forward with confidence and clarity.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Products />
      </div>
    </>
  );
}
