"use client";

import React from "react";
import Image from "next/image";
import { boxIconItems } from "@/data/benefits";

import { getStrapiMediaAlt, getStrapiMediaUrl, type StrapiMediaSingle } from "@/lib/strapi/media";

type FeaturedItem = {
  title?: string;
  Body?: string;
  img?: StrapiMediaSingle;
};
  
type BenefitsProps = {
  featuredItems?: FeaturedItem[];
};

export default function Benefits({ featuredItems = [] }: BenefitsProps) {
  // Keep only two cards, but render them from Strapi dynamically.
  const items = boxIconItems.slice(0, 2);
  const cards = featuredItems.slice(1, 3);
  return (
    <section style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            maxWidth: 1040,
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                flex: "0 1 504px",
                maxWidth: 504,
                minWidth: 280,
                minHeight: 320,
                border: "1px solid rgba(15,23,42,.18)",
                background: "#fff",
                padding: 28,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* ICON AS IMAGE */}
              <div style={{ marginBottom: 12 }}>
                {getStrapiMediaUrl(card?.img) ? (
                  <Image
                    src={getStrapiMediaUrl(card?.img)!}
                    alt={getStrapiMediaAlt(card?.img)}
                    width={40}
                    height={40}
                  />
                ) : null}
              </div>

              <h5 style={{ margin: "0 0 12px", fontSize: 20, color: "#111827" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {card?.title}
                </a>
              </h5>
              <div style={{ color: "#6b7280", lineHeight: 1.7 }}>
                {card?.Body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
