import React from "react";
import "../Styles/Styles.css";
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";

export default function Welcome() {
  const welcomeTitle = "Welcome! First things first...";
  const welcomeSubtitle = "You can always change them later.";
  let nameFields = "NameFields";
  let currentPageWelcome = "Welcome";

  return (
    <div className="OnboardingBody">
      <PageLayout
        title={welcomeTitle}
        subtitle={welcomeSubtitle}
        displayFields={nameFields}
        currentPage={currentPageWelcome}
        status={currentPageWelcome}
      />
      <Link to="/Setup" className="Link">
        <button className="Button">Create Workspace</button>
      </Link>
    </div>
  );
}
