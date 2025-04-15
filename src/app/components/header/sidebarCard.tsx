"use client";

import { useState } from "react";
import SocialMediaLinks from "../socialMediaLinks";
import { SidebarCardDataType, SidebarLinksType } from "./sidebarNav";
import Link from "next/link";

import { motion } from "motion/react";

interface SidebarCardProps {
  sidebarCardIndex: number;
  menuItems: SidebarCardDataType;
  setRenderedSidebarCards: React.Dispatch<
    React.SetStateAction<SidebarCardDataType[]>
  >;
  setBufferedSidebarCardItems: React.Dispatch<
    React.SetStateAction<SidebarCardDataType | null>
  >;
  setSidebarCardsToRemove: React.Dispatch<React.SetStateAction<number>>;
  renderedSidebarCards: SidebarCardDataType[];
}

// This renders the sidebar menu card based on what data it recieves.
export default function SidebarCard({
  sidebarCardIndex,
  menuItems,
  renderedSidebarCards,
  setRenderedSidebarCards,
  setBufferedSidebarCardItems,
  setSidebarCardsToRemove,
}: SidebarCardProps) {
  const [activeMenu, setActiveMenu] = useState(""); // State for showing which menu item's submenu is open.

  // Toggles opening and closing of submenu.
  function toggleSubMenu(label: string, subMenu: SidebarLinksType[]) {
    // Check if we're toggling an already open submenu
    const isTogglingOpenSubmenu =
      renderedSidebarCards.length > sidebarCardIndex + 1; // submenu is open

    if (isTogglingOpenSubmenu) {
      if (renderedSidebarCards[sidebarCardIndex + 1].label === label) {
        // open submenu is the same as the one we are trying to open
        setActiveMenu("");
        setSidebarCardsToRemove(
          // How any nested submenus we need to close.
          renderedSidebarCards.length - sidebarCardIndex - 2
        ); // minus 2 because we already remove 1 sidebar in this function.
        setRenderedSidebarCards((prev) => prev.slice(0, -1)); // Only remove one because subsequent will be removed when the exit animations of the sidecards end.
      } else {
        // we are trying to open a different submenu
        setSidebarCardsToRemove(
          renderedSidebarCards.length - sidebarCardIndex - 2
        ); // minus 2 because we already remove 1 sidebar in this function.
        setRenderedSidebarCards((prev) => prev.slice(0, -1));
        setActiveMenu(label);
        setBufferedSidebarCardItems({
          // Dont immediately put this menu in the stack but hold it to add when the exit animation of the previously open submenu ends
          label: label,
          sidebarCardData: subMenu,
        });
      }
    } else {
      // There is no submenu open. Just open one.
      setActiveMenu(label);
      setRenderedSidebarCards((prev) => [
        ...prev,
        { label: label, sidebarCardData: subMenu },
      ]);
    }
  }

  return (
    <motion.div
      className={
        sidebarCardIndex === 0
          ? "sidebar-nav-level-0"
          : "sidebar-nav-inner-level"
      }
      style={{ zIndex: 10 - sidebarCardIndex }} // This is to ensure the open submenus animate from behind the menus that open them.
      initial={{ x: "-100%" }}
      animate={{ x: "-2px" }} // To compensate the border sizes.
      exit={{ x: "-100%" }}
      transition={{
        duration: 0.15,
        ease: "easeInOut",
      }}
    >
      <div className="sidebar-menu-items">
        {menuItems.sidebarCardData.map((item, index) => {
          return (
            <div
              className={`intermediate-div `}
              key={`menu-item-${sidebarCardIndex}-${index}`}
            >
              {item.title && (
                <div className="sidebar-title-container">
                  <h5 className="h5 swed-yellow">{item.title}</h5>
                  <div className="sidebar-title-line"></div>
                </div>
              )}

              {item.children ? (
                <div
                  className={
                    sidebarCardIndex === 0
                      ? `h7 sidebar-items-style ${
                          activeMenu === item.label ? "active" : ""
                        }`
                      : `h6 sidebar-items-style ${
                          activeMenu === item.label ? "active" : ""
                        }`
                  }
                  onClick={() => toggleSubMenu(item.label!, item.children!)}
                >
                  {item.label}
                </div>
              ) : (
                item.link && (
                  <Link href={item.link} className="sidebar-links">
                    <div
                      className={
                        sidebarCardIndex === 0
                          ? "h7 sidebar-items-style"
                          : "h6 sidebar-items-style"
                      }
                    >
                      {item.label}
                    </div>
                  </Link>
                )
              )}
            </div>
          );
        })}
      </div>
      {sidebarCardIndex === 0 && (
        <div className="social-media-links-container">
          <SocialMediaLinks
            color="var(--swed-black-100)"
            size="2rem"
            showEmailIcon={true}
            className="sidebar-social-media-links"
          />
        </div>
      )}
    </motion.div>
  );
}
