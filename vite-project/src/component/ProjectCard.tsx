import React from "react";

type Project = {
  title: string;
  year?: string | number;
  videos?: string[];
  bullets: string[];
  link?: string;
  badges: string[];
};

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="card my-2 bg-base-100 shadow-xl w-full md:w-1/2">
      <div className="card-body">
        
        {/* 標題與年份 */}
        <div className="flex flex-col justify-between text-xl md:flex-row gap-2">
          <span className="font-bold underline">{project.title}</span>
          <span className="font-medium shrink-0">{project.year}</span>
        </div>

        {/* 影片區塊 (支援單影片、多影片、無影片，並修復了原有的 wmax-w-2xl 拼字小 Bug) */}
        {project.videos && project.videos.length > 0 && (
          <div className="max-w-2xl mx-auto my-6 px-4 w-full flex flex-col gap-4">
            {project.videos.map((url, idx) => (
              <div key={idx} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={url}
                  title={`${project.title} Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {/* 內容列表 */}
        <ul className="list-inside list-disc space-y-1">
          {project.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
          
          {/* 有外部網站連結才渲染 */}
          {project.link && (
            <li>
              <a 
                className="link text-blue-600 hover:text-blue-800 hover:underline font-semibold" 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
              >
                Go to the site
              </a>
            </li>
          )}
        </ul>

        {/* 技術標籤 Badges */}
        <div className="mt-3 flex flex-row flex-wrap gap-4 text-white">
          {project.badges.map((badge, idx) => (
            <div key={idx} className="badge badge-primary text-white">
              {badge}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};