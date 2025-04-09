"use client";

import { useEffect, useRef, useState } from "react";
import SocialMediaLinks from "../socialMediaLinks";
import { SidebarLinksType } from "./sidebarNav";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { easeInOut } from "motion";

type SidebarCardProps = {
  menuItems: SidebarLinksType[];
  level?: number;
  recursiveParentWdith?: number;
};

export default function SidebarCard({
  menuItems,
  level = 0,
}: SidebarCardProps) {
  const [openSubMenu, setOpenSubmenu] = useState<Number | null>(null);

  // get parent's width for the submenu to begin at the edge of parent
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);

  function openMenuToggle(index: number) {
    setOpenSubmenu(openSubMenu === index ? null : index);
  }

  useEffect(() => {
    if (parentRef && parentRef.current) {
      setParentWidth(parentRef.current?.offsetWidth);
    }
  }, []);

  return (
    <div
      ref={parentRef}
      className={
        level === 0 ? "sidebar-nav-level-0" : "sidebar-nav-inner-level"
      }
    >
      <div className="sidebar-menu-items">
        {menuItems &&
          menuItems.length &&
          menuItems.map((item, index) => {
            return (
              <>
                {item.title && <h5>{item.title}</h5>}
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
                    <AnimatePresence>
                      {openSubMenu === index && (
                        <motion.div
                          key={`${item.label} ${index}`}
                          initial={{
                            left: "-200px",
                          }}
                          animate={{
                            left: parentWidth - 1,
                          }}
                          exit={{
                            left: "-200px",
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="motion-wrapper-div"
                        >
                          <SidebarCard
                            menuItems={item.children}
                            level={level + 1}
                            recursiveParentWdith={parentWidth}
                          />
                        </motion.div>
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
              </>
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
    </div>
  );
}
