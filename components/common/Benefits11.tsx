"use client";

import React from "react";
import Image from "next/image";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export const boxIconItems = [
  {
    icon: "/image/icon/start-up.svg",
    title: "Entrepreneurship & startup building",
    description: "",
  },
  {
    icon: "/image/icon/solution.svg",
    title: "Design Thinking & creative problem-solving",
    description: "",
  },
  {
    icon: "/image/icon/coding.svg",
    title: "Coding & digital literacy labs",
    description: "",
  },
  {
    icon: "/image/icon/robot-assistant.svg",
    title: "Robotics challenges and automation basics",
    description: "",
  },
  {
    icon: "/image/icon/artificial-intelligence.svg",
    title: "Artificial Intelligence & smart technology concepts",
    description: "",
  },
  {
    icon: "/image/icon/virtual-tour.svg",
    title: "Augmented & Virtual Reality simulations",
    description: "",
  },
  {
    icon: "/image/icon/cyber-security.svg",
    title: "Cyber Safety awareness modules",
    description: "",
  },
  {
    icon: "/image/icon/game-controller.svg",
    title: "Gaming & gamified learning experiences",
    description: "",
  },
];

export default function Benefits({ benefitsSection }: { benefitsSection?: any }) {
  const items = benefitsSection?.featuredItems || boxIconItems;
  
  return (
    <section>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="benefits-grid">
          {items.map((item : any) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(15,23,42,.18)",
                background: "#fff",
                padding: 24,
                boxSizing: "border-box",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ marginBottom: 12 }}>
                <Image src={getStrapiMediaUrl(item.img)} alt={item.title} width={40} height={40} />
              </div>

              <h5
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#2f3646ff",
                }}
              >
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ responsive CSS INSIDE the component */}
      <style jsx>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .benefits-grid {
            grid-template-columns: 1fr; /* ✅ 1 column on mobile */
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
