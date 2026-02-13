"use client";

import React from "react";
import Octagon from "@/components/Octagon";
import Header from "@/components/header/Header";
import { useSelector } from "react-redux";
import Layers from "@/components/Layers";
import Properties from "@/components/properties/Properties";
import WordsBox from "@/components/boxes/WordsBox";
import ProjectsBox from "@/components/boxes/ProjectsBox";

export default function Home() {
  const radius = 80;
  const gap = 80;
  const level = [1, 2, 3, 4];
  const distortionLevel = [1, 2, 2.5, 3, 4];

  const activeMenuItem = useSelector(
    (state: any) => state.entities.header.activeMenuItem
  );

  const { menuClicked } = useSelector(
    (state: any) => state.entities.currentSelection
  );

  const distortionActive = activeMenuItem === "automation";

  return (
    <div className={"relative min-h-screen"}>
      <Header />

      <div className={"relative flex w-10/12 min-w-[1280px] m-auto gap-4 py-10"}>

        {/* Left panel */}
        <div className="w-full">
          {activeMenuItem === "about" && menuClicked === 1 && (
            <div className="pt-16 space-y-2">
              <div className="beveled-edge">
                <div className="text-3xl font-black tracking-tight">Joel Pradhan</div>
                <div className="text-sm font-medium text-portfolio-lavender mt-1 tracking-wide">
                  Full-Stack Developer &amp; Marketing Automation Expert
                </div>
              </div>
              <div className="beveled-edge text-sm leading-7 text-white/75 space-y-3">
                <p>
                  10+ years building production websites and web applications.
                  600+ client websites managed.
                </p>
                <p>
                  Specializing in high-converting websites, marketing automation,
                  and CRM integrations.
                </p>
                <p className="text-portfolio-slate text-xs tracking-wide">
                  Kathmandu, Nepal &nbsp;·&nbsp; English · Nepali · Hindi
                </p>
              </div>
            </div>
          )}

          {activeMenuItem === "skills" && menuClicked === 1 && (
            <div className="pt-16 space-y-2">
              <div className="beveled-edge">
                <div className="text-3xl font-black tracking-tight">Skills</div>
                <div className="text-sm font-medium text-portfolio-lavender mt-1 tracking-wide">
                  Tech Stack &amp; Tools
                </div>
              </div>
              <div className="beveled-edge">
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "TypeScript", "Laravel", "WordPress", "Figma", "GoHighLevel", "N8N", "Zapier", "SQL", "REST APIs", "GTM", "ActiveCampaign"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold text-portfolio-lavender tracking-wide"
                      style={{
                        background: "rgba(99, 102, 241, 0.12)",
                        border: "1px solid rgba(99, 102, 241, 0.25)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeMenuItem === "projects" && menuClicked === 1 && (
            <div className="pt-16 space-y-2">
              <div className="beveled-edge">
                <div className="text-3xl font-black tracking-tight">Projects</div>
                <div className="text-sm font-medium text-portfolio-lavender mt-1 tracking-wide">
                  Featured Work
                </div>
              </div>
            </div>
          )}

          {menuClicked === 2 && activeMenuItem !== "projects" && <WordsBox />}
          {activeMenuItem === "projects" && <ProjectsBox />}
        </div>

        {/* Center octagon */}
        <div className="shrink-0" style={{ width: `${9 * radius}px` }}>
          <Octagon
            radius={radius}
            gap={gap}
            level={distortionActive ? distortionLevel : level}
          />
        </div>

        {/* Right panel */}
        <div className="w-full min-w-[250px]">
          {menuClicked === 1 && <Layers />}
          {menuClicked === 2 && <Properties />}
        </div>
      </div>
    </div>
  );
}
