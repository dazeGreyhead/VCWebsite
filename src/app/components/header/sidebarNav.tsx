import React, { useRef, useState } from "react";
import SidebarCard from "./sidebarCard";
import { AnimatePresence } from "motion/react";
import useOutsideClick from "@/app/utils/useOutsideClick";
import { SidebarCardDataType } from "@/app/utils/types";
import { sidebarLinks } from "@/app/utils/data";

type SidebarNavProps = {
  openSidebarNav: boolean;
};

export default function SidebarNav({ openSidebarNav }: SidebarNavProps) {
  // State that holds the rendered sidebarcards. Initially holds the first level of sidebar menus.
  // Subsequently opened submenus are sequentially held in this state. It behaves like a stack.
  const [renderedSidebarCards, setRenderedSidebarCards] = useState<
    SidebarCardDataType[]
  >([
    {
      label: "Main Sidebar Menu",
      sidebarCardData: sidebarLinks,
    },
  ]);

  // State that temporarily holds the new sidecard that is to be added to the rendered sidebarcards when there is already another sidecard open.
  // This is so that the new sidecard will be added when the previous open sidecard animates out.
  const [bufferedSidebarCardItems, setBufferedSidebarCardItems] =
    useState<SidebarCardDataType | null>(null);

  // References the container of sidecards.
  // This is for removing all the sidecards when user clicks ouside of the sidecards.
  const componentRef = useRef<HTMLDivElement>(null);

  // State that holds the no. of sidebar cards left to be removed / closed from the main rendered array stack.
  // This is for sequentially removing the sidebar cards. When the top level sidebar card animates out, it tells if there are more to be removed.
  const [sidebarCardsToRemove, setSidebarCardsToRemove] = useState(0);

  // // Handles sequential removal of outside card when user clicks outside of the sidebar container.
  // useOutsideClick(componentRef, () => {
  //   setSidebarCardsToRemove(renderedSidebarCards.length - 1); // Sets how many sidebarcards must be removed. -1 because we remove one in the following line.
  //   setRenderedSidebarCards((prev) => prev.slice(0, -1)); // Removes one sidecard at the top of the stack, in other words, end of the array.
  //   // Other ones to be removed will be sequentially be removed on the exit animation of the previously removed sidebar card.
  // });

  // Function that is fired when the animation of the removal of a sidecard ends. Basically another sidecard is added or removed only after the previous sidecard
  // completely animates out.
  function changeTheSidecards() {
    if (sidebarCardsToRemove > 0) {
      // If there are sidecards left to remove
      setRenderedSidebarCards((prev) => prev.slice(0, -1)); // remove one at a time. If there is more left to remove, this will run again when the animation of the
      // currently removed sidecard ends.
      setSidebarCardsToRemove((prev) => prev - 1); // One sidebar card removed.
    } else if (bufferedSidebarCardItems) {
      // If there is a sidecard to be added. Else if so that another sidebar card is added only after all the ones to be removed has been removed.
      setRenderedSidebarCards([
        ...renderedSidebarCards,
        bufferedSidebarCardItems,
      ]);
      setBufferedSidebarCardItems(null);
    }
  }

  return (
    <div className="sidebar-container" ref={componentRef}>
      <AnimatePresence onExitComplete={() => changeTheSidecards()}>
        {/* This checks the addition and removal of sidecards and fires the previously defined funciton when a sidecard animates out. */}
        {renderedSidebarCards.map((sidecard, index) => (
          <SidebarCard
            key={`${index} ${sidecard.label}`}
            sidebarCardIndex={index}
            menuItems={sidecard}
            renderedSidebarCards={renderedSidebarCards}
            setRenderedSidebarCards={setRenderedSidebarCards}
            setBufferedSidebarCardItems={setBufferedSidebarCardItems}
            setSidebarCardsToRemove={setSidebarCardsToRemove}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
