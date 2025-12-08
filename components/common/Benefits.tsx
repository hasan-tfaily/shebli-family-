"use client";

import React from "react";
import Image from "next/image";
import { boxIconItems } from "@/data/benefits";

export default function Benefits() {
  const items = boxIconItems.slice(0, 2); // keep only two cards

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
          {items.map((item, i) => (
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
              {/* ICON AS IMAGE */}w
              <div style={{ marginBottom: 12 }}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>

              <h5 style={{ margin: "0 0 12px", fontSize: 20, color: "#111827" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.title}
                </a>
              </h5>

              <div style={{ color: "#6b7280", lineHeight: 1.7 }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
