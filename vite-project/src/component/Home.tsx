import { FlowBiteHeader } from "./FlowBiteHeader";
import { About } from "./About";
import { BrowerMockup } from "./BrowerMockup";
import BackToUp from "@uiw/react-back-to-top";
import { Chat } from "./Chat";
export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center font-sans text-lg text-black dark:bg-black dark:text-white pb-8">
      <FlowBiteHeader />
      <div className="m-4 px-4">
        <About />
        <div className="bg-base-500 px-4 py-16">
          <Chat />
        </div>
        <BrowerMockup />
      </div>
      <BackToUp>Top</BackToUp>
    </div>
  );
};
