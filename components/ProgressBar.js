import React from "react";
import { useProgressContext } from "./../Context/ProgressContext";

const ProgressBar = () => {
  const progressState = useProgressContext();
  return (
    <div className="flex justify-center bg-white absolute w-screen bottom-0 pb-36 lg:pb-10">
      <section className="3xl:scale-125">
        <ul className="step-wizard-list">
          {progressState.progress.map((item, i) => (
            <li
              key={i}
              className={`step-wizard-item ${
                item.active ? "current-item" : ""
              }`}
            >
              <span className="progress-count">{i + 1}</span>
              <span className="progress-label">{item.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProgressBar;
