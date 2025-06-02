import DevelopmentProjectsIconSVG from "../components/svgComponents/DevelopmentProjectsIconSVG";
import DisastersRespondedIconSVG from "../components/svgComponents/DisastersRespondedIconSVG";
import HouseholdIconSVG from "../components/svgComponents/HouseholdIconSVG";
import IndividualsIconSVG from "../components/svgComponents/IndividualsIconSVG";
import RescuedIconSVG from "../components/svgComponents/RescuedIconSVG";
import TotalVolunteersIconSVG from "../components/svgComponents/TotalVolunteersIconSVG";
import { SidebarLinksType, VcnStatsType } from "./types";

// This is the all encompassing nested sidebar menu and submenu data.
export const sidebarLinks: SidebarLinksType[] = [
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


// Data of the primary stats of vcn in our impact.
export const vcnPrimaryStats: VcnStatsType[] = [
  {
    icon: HouseholdIconSVG,
    number: 19299,
    descriptor: "HOUSEHOLDS SUPPORTED",
  },
  {
    icon: IndividualsIconSVG,
    number: 101869,
    descriptor: "Individuals REACHED",
  },
  {
    icon: DisastersRespondedIconSVG,
    number: 45,
    descriptor: "DISASTERS RESPONDED",
  },
  {
    icon: DevelopmentProjectsIconSVG,
    number: 76,
    descriptor: "DEVELOPMENT PROJECTS",
  },
  {
    icon: RescuedIconSVG,
    number: 297,
    descriptor: "RESCUED",
  },
  {
    icon: TotalVolunteersIconSVG,
    number: 8000,
    descriptor: "TOTAL VOLUNTEERS",
  },
];