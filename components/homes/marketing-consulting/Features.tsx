"use client";
import dynamic from "next/dynamic";
const WeeklyBarChart = dynamic(
  () => import("@/components/charts/WeeklyBarChart"),
  { ssr: false }
);
import DropdownSelect from "@/components/common/DropdownSelect";
import React from "react";
import Link from "next/link";

export default function Features() {
  return (
    <section className="section-why-choose h-5 tf-spacing-21">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="section-why-inner">
              <div className="section-left">
                <div className="card-chart w-627">
                  <div className="top-cart flex justify-content-end">
                    <DropdownSelect
                      addtionalParentClass="no-border"
                      options={["Week", "Month", "Year"]}
                    />
                  </div>
                  <div className="card-chart-content">
                    <WeeklyBarChart />
                  </div>
                </div>

                {/* ...rest of your layout... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
