import React from "react";
import { FlowBiteHeader } from "./FlowBiteHeader";
import { About } from "./About";
import { BrowerMockup } from "./BrowerMockup";
import ScrollToTop from "react-scroll-to-top";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white font-sans text-lg text-black dark:bg-black dark:text-white">
      <FlowBiteHeader />
      <div className="mt-4">
        <About />
        <BrowerMockup />
        <ScrollToTop smooth />
      </div>
    </div>
  );
};
