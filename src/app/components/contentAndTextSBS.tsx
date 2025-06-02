import Image from "next/image";
import React from "react";
import { ContentAndTextSBSType } from "../utils/types";
import TitleLine from "./TitleLine";
import VideoContent from "./videoContent";

export default function ContentAndTextSBS({
  catsbsContainerClassName,
  contentType,
  contentDirection,
  contentContainerClassname,
  hasButton,
  hasTitleLine,
  titleLineColor,
  src,
  imgAlt,
  imgHeight,
  imgWidth,
  imgClassName,
  videoClassName,
  header,
  paragraph,
  headerClassName,
  paragraphClassName,
  textContainerClassname,
  buttonText,
  buttonClassName,
  buttonOnclick,
}: ContentAndTextSBSType) {
  const orderedElements = [
    <div
      key={"1"}
      className={
        contentContainerClassname
          ? contentContainerClassname
          : "catsbs-content-container"
      }
    >
      {contentType === "image" ? (
        <Image
          src={src}
          alt={imgAlt ? imgAlt : ""}
          width={imgWidth}
          height={imgHeight}
          className={imgClassName}
        />
      ) : (
        <VideoContent
          videoClassName={videoClassName ? videoClassName : ""}
          videoSrc={src}
        />
      )}
    </div>,
    <div
      key={"2"}
      className={
        textContainerClassname
          ? textContainerClassname
          : "catsbs-text-container"
      }
    >
      <div className="catsbs-header-container">
        <h2 className={headerClassName}>{header}</h2>
        {hasTitleLine && (
          <TitleLine color={titleLineColor ? titleLineColor : "swed-yellow"} />
        )}
      </div>
      <div className="catsbs-paragraph-button-container">
        <div className="catsbs-paragraph-container">
          <p className={paragraphClassName}>{paragraph}</p>
        </div>
        {hasButton && <button className={buttonClassName}>{buttonText}</button>}
      </div>
    </div>,
  ];

  return (
    <section
      className={
        catsbsContainerClassName ? catsbsContainerClassName : "catsbs-container"
      }
    >
      {contentDirection === "left"
        ? orderedElements
        : orderedElements.reverse()}
    </section>
  );
}
