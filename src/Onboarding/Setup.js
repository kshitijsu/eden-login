import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";

export default function Setup() {
  const setupTitle = "Let's set up a home for all your work";
  const setupSubtitle = "You can always create another workspace later.";
  let workspaceFields = "WorkspaceFields";
  let currentPageSetup = "Setup";

  return (
    <div className="OnboardingBody">
      <PageLayout
        title={setupTitle}
        subtitle={setupSubtitle}
        displayFields={workspaceFields}
        currentPage={currentPageSetup}
        status={currentPageSetup}
      />
      <Link to="/Planning" className="Link">
        <button className="Button">Create Workspace</button>
      </Link>
    </div>
  );
}
