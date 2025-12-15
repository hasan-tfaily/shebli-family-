"use client";

import React from "react";
import Image from "next/image";

// If this file is in /data/benefits.tsx and you import boxIconItems elsewhere,
// you can keep these exports as they are.
export const boxIconItems = [
  {
    icon: "/image/icon/start-up.svg",
    title: "Entrepreneurship & startup building",
    description:
      "To design and operate innovative, story-driven leisure and entertainment experiences that enrich the lives of children and families. We bring imagination to life through purposeful design, experiential learning, operational excellence, and strong community connections.\n\nOur mission is to support governments, developers, and private partners in building impactful entertainment destinations that promote learning, creativity, wellbeing, and family bonding.",
  },
  {
    icon: "/image/icon/solution.svg",
    title: "Design Thinking & creative problem-solving",
    description:
      "To be the most trusted and inspiring edutainment group in the Middle East, transforming how children learn, play, and imagine their future.",
  },
  {
    icon: "/image/icon/coding.svg",
    title: "Coding & digital literacy labs",
    description:
      "Interactive experiences that introduce children to business basics, idea creation, and the foundations of running a startup.",
  },
  {
    icon: "/image/icon/robot-assistant.svg",
    title: "Robotics challenges and automation basics",
    description:
      "Hands-on challenges that foster empathy, ideation, prototyping, and iteration to solve real-world problems.",
  },
  {
    icon: "/image/icon/artificial-intelligence.svg",
    title: "Artificial Intelligence & smart technology concepts",
    description:
      "Engaging workshops that help children understand coding logic, digital tools, and the basics of programming.",
  },
  {
    icon: "/image/icon/virtual-tour.svg",
    title: "Augmented & Virtual Reality simulations",
    description:
      "Activities where children build, program, and test robots while learning about automation and future technologies.",
  },
  {
    icon: "/image/icon/cyber-security.svg",
    title: "Cyber Safety awareness modules",
    description:
      "Modules that teach children how to navigate the digital world safely, responsibly, and confidently.",
  },
  {
    icon: "/image/icon/game-controller.svg",
    title: "Gaming & gamified learning experiences",
    description:
      "Playful, game-based learning that turns key skills and concepts into immersive, motivating adventures.",
  },
];

// Kept here in case you still need them elsewhere
export const boxIconItems2 = [
  {
    iconClass: "icon-risk",
    title: "Mitigation Compliance",
    description:
      "Proactively identify and address potential risks to ensure your business remains stable and secure in a volatile environment and standards.",
  },
  {
    iconClass: "icon-regulatory",
    title: "Regulatory Compliance",
    description:
      "Proactively identify and address potential risks to ensure your business remains stable and secure in a volatile environment and standards.",
  },
  {
    iconClass: "icon-strategic-planning",
    title: "Operational Efficiency",
    description:
      "Proactively identify and address potential risks to ensure your business remains stable and secure in a volatile environment and standards.",
  },
  {
    iconClass: "icon-reputation",
    title: "Reputation Protection",
    description:
      "Proactively identify and address potential risks to ensure your business remains stable and secure in a volatile environment and standards.",
  },
];

export default function Benefits() {
  // Take exactly 8 items (you now have 8 above)
  const items = boxIconItems.slice(0, 8);

  return (
    <section >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 boxes per row
            gap: 32,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
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
              {/* ICON */}
              <div style={{ marginBottom: 12 }}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>

              {/* TITLE */}
              <h5
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                {item.title}
              </h5>

              {/* DESCRIPTION */}
              {/* <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#6b7280",
                  whiteSpace: "pre-line",
                }}
              >
                {item.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
