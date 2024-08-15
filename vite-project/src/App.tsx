import React from "react";
import { FlowBiteHeader } from "./component/FlowBiteHeader";
import { About } from "./component/About";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white font-sans text-lg">
      <FlowBiteHeader />

      <div className="mt-4">
        <About />
        {/* <AntFooter /> */}
      </div>
    </div>
  );
};
export default App;
