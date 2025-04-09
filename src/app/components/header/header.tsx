"use client";

import React, { useEffect, useState } from "react";
import "./headerStyles.scss";
import Image from "next/image";
import SidebarNav from "./sidebarNav";
import Link from "next/link";

export default function Header() {
  const [openSidebarNav, setOpenSidebarNav] = useState(false);
  const [transparentHeader, setTransparentHeader] = useState(true);

  function showSideNav() {
    setOpenSidebarNav(!openSidebarNav);
    setTransparentHeader(!transparentHeader);
  }

  return (
    <>
      <div className="header-container">
        <header className={transparentHeader ? "" : "solid"}>
          <nav>
            <div className="left-nav">
              <ul>
                <li>
                  <Image
                    src="/Hamburger-Icon.svg"
                    width={78}
                    height={81}
                    alt="Hamburger Icon"
                    onClick={showSideNav}
                  />
                </li>
                <li>
                  <Link href="/">
                    <Image
                      src="Volunteer-Corps-Logo.svg"
                      width={192}
                      height={80}
                      alt="Volunteer Corps Logo"
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
        <div
          className={`sidebar-container ${
            openSidebarNav ? "fade-in-sidebar" : "fade-out-sidebar"
          }`}
        >
          <SidebarNav />
        </div>
      </div>
    </>
  );
}
