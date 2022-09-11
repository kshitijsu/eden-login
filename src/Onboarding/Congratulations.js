import React from "react";
import PageLayout from "../Components/PageLayout";

export default function Congratulations() {
  const congratulationsTitle = "Congratulations, Eren";
  const congratulationsSubtitle =
    "You have completed onboarding, you can start using the Eden!";

  let currentPageCongrats = "Congratulations";

  return (
    <div className="OnboardingBody">
      <PageLayout
        title={congratulationsTitle}
        subtitle={congratulationsSubtitle}
        currentPage={currentPageCongrats}
        status={currentPageCongrats}
        displayFields={currentPageCongrats}
      />
      <button className="Button">Launch Eden</button>
    </div>
  );
}
