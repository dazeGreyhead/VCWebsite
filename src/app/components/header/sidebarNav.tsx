import React from "react";
import SidebarCard from "./sidebarCard";
import { AnimatePresence } from "motion/react";

export type SidebarLinksType = {
  label?: string;
  level?: number; // For recursive rendering. Level tells us the generation of the element. level 0 is the greatest ancestor and no level means the youngest child.
  link?: string;
  title?: string;
  children?: SidebarLinksType[];
};

const sidebarLinks: SidebarLinksType[] = [
  {
    label: "Who We Are",
    children: [
      {
        label: "ABOUT US",
        link: "./about-us",
      },
      {
        label: "HISTORY",
        link: "./history",
      },
      {
        label: "LEADERSHIP",
        link: "./leadership",
      },
    ],
  },
  {
    label: "What We Do",
    children: [
      {
        title: "SECTORS",
      },
      {
        label: "DISASTER RESPONSE",
        link: "./sectors/disaster-response",
      },
      {
        label: "EDUCATION",
        link: "./sectors/education",
      },
      {
        label: "HEALTH",
        link: "./sectors/health",
      },
      {
        label: "SHELTER",
        link: "./sectors/shelter",
      },
      {
        label: "SUSTAINABLE LIVELIHOOD",
        link: "./sectors/sustainable-livelihood",
      },
      {
        label: "WASH",
        link: "./sectors/wash",
      },
    ],
  },
  {
    label: "Where We Work",
    children: [
      {
        label: "Nepal",
        link: "www.volunteercorpsnepal.org",
      },
      {
        label: "Philippines",
        link: "www.volunteercorpsphilippines.org",
      },
      {
        label: "Japan (Liason Office)",
        link: "www.vcnjapan.org",
      },
    ],
  },
  {
    label: "Archive",
    children: [
      {
        label: "NEWS",
        link: "./archive/news",
      },
      {
        label: "REPORTS",
        link: "./archive/reports",
      },
      {
        label: "STORIES",
        link: "./archive/stories",
      },
    ],
  },
  {
    label: "How To Help",
    children: [
      {
        label: "DONATE",
        children: [
          {
            label: "Test",
            link: "./somewhere",
          },
          {
            label: "Test 2",
            link: "/here-we-go",
          },
        ],
      },
      {
        label: "APPLY FOR VOLUNTEER",
        link: "./apply-for-volunteer",
      },
      {
        label: "VACANCY",
        link: "./vacancy",
      },
    ],
  },
];

export default function SidebarNav() {
  return <SidebarCard key={"Main Card"} menuItems={sidebarLinks} />;
}
