import React from "react";
import { Education } from "./Education";
import { WorkExp } from "./WorkExp";
import { Chat } from "./Chat";

export const BrowerMockup = () => {
  return (
    <div className="bg-base-300 border px-3 rounded-lg">
      <div className="bg-base-200 flex justify-center px-4 py-16 text-3xl">
        My Resume
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
