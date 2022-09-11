import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";

export default function Planning() {
  const planningTitle = "How are you planning to use Eden?";
  const planningSubtitle =
    "We'll streamline your setup experience accordingly.";

  let planning = "Planning";
  let currentPagePlanning = "Planning";

  return (
    <div className="OnboardingBody">
      <PageLayout
        title={planningTitle}
        subtitle={planningSubtitle}
        displayFields={planning}
        currentPage={currentPagePlanning}
        status={currentPagePlanning}
      />
      <Link to="/Congratulations" className="Link">
        <button className="Button">Create Workspace</button>
      </Link>
    </div>
  );
}
