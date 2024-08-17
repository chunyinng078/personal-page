import React from "react";
import { Education } from "./Education";
import { WorkExp } from "./WorkExp";

export const BrowerMockup = () => {
  return (
    <div className="mockup-browser bg-base-300 border ">
      <div className="mockup-browser-toolbar">
        <div className="input">https://edwinng.com/background</div>
      </div>

      <div className="bg-base-200 flex justify-center px-4 py-16">
        More about me!
      </div>
      <div className="mockup-browser-tabs p-5">
        <div className="mockup-browser-tab bg-base-200">
          <Education />
        </div>
        <div className="mockup-browser-tab bg-base-200">
          <WorkExp />
        </div>
        <div className="mockup-browser-tab bg-base-200"></div>
      </div>
    </div>
  );
};
