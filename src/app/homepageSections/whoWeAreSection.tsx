import React from "react";
import ContentAndTextSBS from "../components/contentAndTextSBS";
import Painted2SVG from "../components/svgComponents/Painted2SVG";
import DestructedBackgroundSVGComp from "../components/svgComponents/DestructedBackgroundSVGComp";
import VideoContent from "../components/videoContent";

export default function WhoWeAreSection() {
  return (
    <section>
      <div className="who-we-are-main-container">
        <ContentAndTextSBS
          contentType="image"
          contentDirection="right"
          textContainerClassname="who-we-are-main-text-container"
          src="/Who-We-Are.png"
          imgAlt="who we are main image"
          imgHeight={610}
          imgWidth={877}
          imgClassName="who-we-are-main-content"
          header="Who We Are"
          hasTitleLine={true}
          titleLineColor="swed-yellow"
          hasButton={false}
          headerClassName="h1 swed-blue"
          paragraph="Volunteer Corps Nepal (VCN) is a Non-Government, Humanitarian Aid Agency that provides emergencyrelief and sustainable solutions for population affected by naturaldisasters, epidemics and post-conflict situations. Since 2018, VCN has become synonymous with rapid response to humanitarian crises; with its medical teams, search and rescue units, water engineers and post trauma experts leading national responses. VCN provides the vital support needed to move from destruction to reconstruction and sustainable living, promoting volunteerism and making Humanity alive."
          paragraphClassName="who-we-are-paragraph"
        />
        <Painted2SVG
          className="who-we-are-main-text-background"
          preserveAspectRatio="none"
        />
      </div>
      <div className="who-we-are-secondrow-container">
        <ContentAndTextSBS
          catsbsContainerClassName="who-we-are-secondrow-catsbs-container"
          contentType="image"
          contentDirection="left"
          textContainerClassname="who-we-are-secondrow-text-container"
          contentContainerClassname="who-we-are-secondrow-content-container"
          src="/Who-We-Are-Specialize.jpg"
          imgAlt="who we are secondrow image"
          imgHeight={2736}
          imgWidth={3648}
          imgClassName="who-we-are-secondrow-content "
          header="We Specialize in fragile settings:"
          hasTitleLine={false}
          hasButton={false}
          headerClassName="h3 bright-blue"
          paragraph="There is one constant in fragile settings: they don’t follow a pattern. Today, we will work to deliver life-saving aid to thousands of people living on the edge of survival. Tomorrow, when the crisis subsides, we will work alongside community members to restore job opportunities, build criticalinfrastructure, and developeducation programs. And the day after that we will be ready for the next chapter. In fragile settings, every day brings new opportunities and fresh challenges. VCN has the experience and agility to meet the ever-changing needsof populations in vulnerable situations. We partner with them to develop a strategy for the future and create more enduring pathways to stability."
          paragraphClassName="who-we-are-secondrow-paragraph"
        />
      </div>
      <div className="who-we-are-thirdrow-container">
        <ContentAndTextSBS
          contentType="video"
          contentDirection="left"
          textContainerClassname="who-we-are-thirdrow-text-container"
          contentContainerClassname="who-we-are-thirdrow-content-container"
          src="/FEB27.mp4"
          videoClassName="who-we-are-thirdrow-content"
          header="A Struggle of Survival"
          hasTitleLine={false}
          hasButton={false}
          headerClassName="h3"
          paragraph="There is one constant in fragile settings: they don’t follow a pattern. Today, we will work to deliver life-saving aid to thousands of people living on the edge of survival. Tomorrow, when the crisis subsides, we will work alongside community members to restore job opportunities, build criticalinfrastructure, and developeducation programs. And the day after that we will be ready for the next chapter. In fragile settings, every day brings new opportunities and freshchallenges. VCN has the experience and agility to meet the ever-changing needsof populations in vulnerable situations. We partner with them to develop a strategy for the future and create more enduring pathways to stability."
          paragraphClassName="who-we-are-paragraph"
        />
        <DestructedBackgroundSVGComp
          className="who-we-are-thirdrow-background"
          preserveAspectRatio="none"
        />
      </div>
    </section>
  );
}
