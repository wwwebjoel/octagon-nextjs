import React from "react";
import Box from "@/components/common/Box";
import projectsData from "@/data/projects.json";

const ProjectsBox: React.FC = () => {
  return (
    <div className="w-full max-w-[220px] m-auto mt-16">
      <Box>
        <div className="font-black text-sm tracking-widest uppercase text-portfolio-slate mb-4">Projects</div>
        <div className="flex flex-col gap-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="pb-4 last:pb-0 border-b border-portfolio-indigo/15 last:border-0"
            >
              <div className="font-bold text-sm text-white/90">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-portfolio-cyan transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {project.title}
                    <span className="text-portfolio-cyan text-xs">↗</span>
                  </a>
                ) : (
                  project.title
                )}
              </div>
              <div className="text-[10px] font-semibold tracking-widest uppercase text-portfolio-lavender/60 mt-0.5">
                {project.type}
              </div>
              <div className="text-xs text-white/50 mt-1.5 leading-relaxed">
                {project.description}
              </div>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default ProjectsBox;
