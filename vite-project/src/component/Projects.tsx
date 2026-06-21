import { FlowBiteHeader } from "./FlowBiteHeader";
import { ProjectCard } from "./ProjectCard";
import BackToUp from "@uiw/react-back-to-top";
import projectsData from "../data/project.json"; // 匯入剛剛的 JSON 設定檔

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden font-sans text-lg text-black dark:bg-black dark:text-white">
      <FlowBiteHeader />

      <div className="flex w-full flex-col items-center justify-center my-4 mx-auto px-4 gap-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <BackToUp>Top</BackToUp>
    </div>
  );
};