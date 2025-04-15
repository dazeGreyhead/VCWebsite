// Type for the nested menu links in sidebar. One of label or title must be present in this type.
export type SidebarLinksType =
  | {
      label: string;
      link?: string;
      title?: string;
      children?: SidebarLinksType[];
    }
  | {
      label?: string;
      link?: string;
      title: string;
      children?: SidebarLinksType[];
    };

// Type for the data of the sidebar cards. The array that holds the sidecard data that are currently rendered are of this data type.
// It has label to check which sidebar cards are currently being rendered and sidebarCardData that is the data displayed in the sidecards.
export type SidebarCardDataType = {
  label: string;
  sidebarCardData: SidebarLinksType[];
};