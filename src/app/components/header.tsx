import React from "react";
import "./headerStyles.scss";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <nav className="header-text">
          <div className="left-nav">
            <ul>
              <li>
                <Image
                  src="/Hamburger-Icon.svg"
                  width={78}
                  height={81}
                  alt="Hamburger Icon"
                />
              </li>
              <li>
                <Image
                  src="Volunteer-Corps-Logo.svg"
                  width={192}
                  height={80}
                  alt="Volunteer Corps Logo"
                />
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
    </>
  );
}
