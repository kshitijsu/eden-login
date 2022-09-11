import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const steps = [
  {
    status: "Welcome",
  },
  {
    status: "Setup",
  },
  {
    status: "Planning",
  },
  {
    status: "Congratulations",
  },
];

export default function StepProgressBar({ status }) {
  const transfer = {
    status: status,
  };

  const getStepPosition = (transferStatus) => {
    return steps.findIndex(({ status }) => status === transferStatus) + 1;
  };

  return (
    <>
      <div className="StepProgressBar">
        <ProgressBar
          width={500}
          height={2}
          percent={100 * (getStepPosition(transfer.status) / steps.length)}
          filledBackground="rgb(102,77,229)"
        >
          {steps.map((step, index, arr) => {
            return (
              <Step
                position={100 * (index / arr.length)}
                transition="scale"
                children={({ accomplished }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                      width: 30,
                      height: 30,
                      color: "white",
                      backgroundColor: accomplished
                        ? "rgb(102,77,229)"
                        : "gray",
                    }}
                  >
                    {index + 1}
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
      </div>
    </>
  );
}
