

import React from "react";
import { FlowBiteHeader } from "./component/FlowBiteHeader";
import { About } from "./component/About";
// import { Education } from "./component/Education";
import { BrowerMockup } from "./component/BrowerMockup";

import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white font-sans text-lg">
      <FlowBiteHeader />

      <div className="mt-4">
        <About />
        <BrowerMockup />
        {/* <Education /> */}

        {/* <AntFooter /> */}
      </div>
    </div>
  );
};
export default App;
