import React from "react";
import Style from "./ProjectLanding.module.css";
import ProjectLandingCard from "../ProjectLandingCard/ProjectLandingCard";

function ProjectLanding() {
  return (
    <div className={Style.ProjectLandingContainer}>
      <div className="row cotnainer">
        <div className="col-md-3 ">
          <ProjectLandingCard />
        </div>
        <div className="col-md-3 ">
          <ProjectLandingCard />
        </div>
        <div className="col-md-3 ">
          <ProjectLandingCard />
        </div>
        <div className="col-md-3 ">
          <ProjectLandingCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectLanding;
