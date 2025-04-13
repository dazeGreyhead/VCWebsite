"use client";

import { useEffect, useRef, useState } from "react";
import SocialMediaLinks from "../socialMediaLinks";
import { SidebarLinksType } from "./sidebarNav";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { easeInOut } from "motion";
import useOutsideClick from "@/app/utils/useOutsideClick";

type SidebarCardProps = {
  menuItems: SidebarLinksType[];
  level?: number;
  parentWidth?: number;
};

export default function SidebarCard({
  menuItems,
  level = 0,
  parentWidth = 0,
}: SidebarCardProps) {
  const [openSubMenu, setOpenSubmenu] = useState<number | null>(null); // stores index of the submenu that should be open.
  const [bufferOpenIndex, setBufferOpenIndex] = useState<number | null>(null);

  const componentRef = useRef<HTMLDivElement>(null);
  const [componentWidth, setcomponentWidth] = useState(0); // component width to be passed down to child as parentwidth

  function openMenuToggle(index: number) {
    if (openSubMenu !== null) {
      // if there is already an open submenu.
      if (openSubMenu === index) {
        // if the submenu we are trying to open is already open, close it.
        setOpenSubmenu(null);
      } else {
        // if the we are trying to open a different menu, buffer it so it opens after exit animation of previous submenu.
        setOpenSubmenu(null);
        setBufferOpenIndex(index);
      }
    } else {
      // if no submenu is open, open one.
      setOpenSubmenu(index);
    }
  }

  function openBufferedMenu() {
    if (bufferOpenIndex != null) {
      setOpenSubmenu(bufferOpenIndex);
      setBufferOpenIndex(null);
    }
  }

  useOutsideClick(componentRef, () => setOpenSubmenu(null));

  useEffect(() => {
    if (componentRef && componentRef.current) {
      setcomponentWidth(componentRef.current?.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      initial={{
        left: parentWidth - 1,
        x: "-100%",
      }}
      animate={{
        left: parentWidth - 1,
        x: "0",
      }}
      exit={{
        left: parentWidth - 1,
        x: "-100%",
      }}
      transition={{
        ease: easeInOut,
        duration: 0.5,
      }}
      ref={componentRef}
      className={
        level === 0 ? "sidebar-nav-level-0" : "sidebar-nav-inner-level"
      }
      style={{ zIndex: -level }}
    >
      <div className="sidebar-menu-items">
        {menuItems.map((item, index) => {
          return (
            <div key={`menu-item-${level}-${index}`}>
              {item.title && (
                <div className="sidebar-title-container">
                  <h5 className="h5 swed-yellow">{item.title}</h5>
                  <div className="sidebar-title-line"></div>
                </div>
              )}
              {item.children ? (
                <>
                  <div
                    className={
                      level === 0
                        ? "h7 sidebar-items-style"
                        : "h6 sidebar-items-style"
                    }
                    onClick={() => openMenuToggle(index)}
                  >
                    {item.label}
                  </div>
                  <AnimatePresence onExitComplete={() => openBufferedMenu()}>
                    {openSubMenu === index && (
                      <SidebarCard
                        menuItems={item.children}
                        level={level + 1}
                        parentWidth={componentWidth}
                      />
                    )}
                  </AnimatePresence>
                </>
              ) : (
                item.link && (
                  <Link href={item.link} className="sidebar-links">
                    <div
                      className={
                        level === 0
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

      {level === 0 && (
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
