import React from "react";
import ProgrammaticApproachesDiagramSVG from "../components/svgComponents/ProgrammaticApproachesDiagram";
import TitleLine from "../components/TitleLine";
import "./homepage.scss";

export default function VCNProgrammaticApproaches() {
  return (
    <section className="vcn-programmatic-approaches-container">
      <div className="title-container">
        <h1 className="h1 swed-blue">VCN Programmatic Approaches</h1>
        <TitleLine color="swed-yellow" />
      </div>
      <div className="programmatic-approaches-diagram-container">
        <ProgrammaticApproachesDiagramSVG className="programmatic-approaches-diagram" />
      </div>
    </section>
  );
}
