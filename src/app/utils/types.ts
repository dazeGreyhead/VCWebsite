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

export type ContentAndTextSBSType = {
  catsbsContainerClassName?: string;
  contentType: 'image' | 'video';
  contentDirection: 'left' | 'right';
  contentContainerClassname?: string;
  hasTitleLine: boolean;
  titleLineColor?: "swed-blue" | "swed-yellow" | "vcn-red";
  src: string;
  imgAlt?: string;
  imgHeight?: number;
  imgWidth?: number;
  imgClassName?: string;
  videoClassName?: string;
  header: string;
  paragraph: string;
  headerClassName?: string;
  paragraphClassName?: string;
  textContainerClassname?: string;
  hasButton: boolean;
  buttonText?: string;
  buttonClassName?: string;
  buttonOnclick?: () => void;
}

export type VcnStatsType = {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  number: number;
  descriptor: string;
};