"use client";

import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import "./headerStyles.scss";
import Image from "next/image";
import SidebarNav from "./sidebarNav";
import Link from "next/link";
import { easeInOut } from "motion";

export default function Header() {
  const [openSidebarNav, setOpenSidebarNav] = useState(false);
  const [transparentHeader, setTransparentHeader] = useState(true);
  const [transparentHeaderHistory, setTransparentHeaderHistory] =
    useState(true); // Stores the state of the header before the sidebar nav was opened.
  // The header must be solid when sidebar nav is opened but it must go back to the state it was in before the sidebar nav was opened.
  // The scrolling changes the state of the header.

  // This makes the header solid when the user scrolls down from the top of the page.
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the scroll threshold as needed
      if (scrollY > 100) {
        setTransparentHeader(false);
        setTransparentHeaderHistory(false);
      } else {
        setTransparentHeader(true);
        setTransparentHeaderHistory(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function showSideNav() {
    setOpenSidebarNav(!openSidebarNav);
    setTransparentHeader(!openSidebarNav ? false : transparentHeaderHistory);
  }

  return (
    <>
      <header className={transparentHeader ? "" : "solid"}>
        <nav>
          <div className="left-nav">
            <ul>
              <li>
                <MotionConfig
                  transition={{
                    duration: 0.4,
                    ease: easeInOut,
                  }}
                >
                  <motion.svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={showSideNav}
                    initial={false}
                    animate={openSidebarNav ? "open" : "closed"}
                  >
                    <motion.line
                      variants={{
                        open: {
                          rotate: "45deg",
                          y: 10.5,
                          x: -10.5,
                        },
                        closed: {
                          rotate: "0deg",
                          y: 0,
                          x: 0,
                        },
                      }}
                      x1="17"
                      y1="20.5"
                      x2="62"
                      y2="20.5"
                      stroke="#FECC02"
                      strokeWidth="3"
                    />
                    <motion.line
                      y1="31"
                      x2="45"
                      y2="31"
                      stroke="#FECC02"
                      strokeWidth="3"
                      variants={{
                        open: {
                          opacity: 0,
                          x: 10.5,
                        },
                        closed: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                    />
                    <motion.line
                      variants={{
                        open: {
                          rotate: "-45deg",
                          y: -10.5,
                          x: -10.5,
                        },
                        closed: { rotate: "0deg", y: 0, x: 0 },
                      }}
                      x1="17"
                      y1="41.5"
                      x2="62"
                      y2="41.5"
                      stroke="#FECC02"
                      strokeWidth="3"
                    />
                  </motion.svg>
                </MotionConfig>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/svg/Volunteer-Corps-Logo.svg"
                    width={192}
                    height={80}
                    alt="Volunteer Corps Logo"
                    className="header-logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <ul>
              <li>EN ⌄</li>
              <li>
                <button className="primary-button header-text black-text-100">
                  DONATE
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {openSidebarNav && (
        <div className="sidebar-container">
          <SidebarNav openSidebarNav={openSidebarNav} />
        </div>
      )}
    </>
  );
}
