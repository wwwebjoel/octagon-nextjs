"use client";

import React from "react";
import Octagon from "@/components/Octagon";
import Image from "next/image";
import Header from "@/components/header/Header";
import { useSelector } from "react-redux";
import Layers from "@/components/Layers";

export default function Home() {
  const radius = 80;
  const gap = 80;
  const level = [1, 2, 3, 4];
  const distortionLevel = [1, 2, 2.5, 3, 4];

  const activeMenuItem = useSelector(
    (state: any) => state.entities.header.activeMenuItem
  );

  const distortionActive = activeMenuItem === "distortions";

  const modules: any = useSelector<any>((state) => state.entities.modules);

  const topItems = ["essence", "expressions", "environment"]
  const bottomItems = ["roots", "foundations", "distortions", "contriutions"]

  return (
    <div className={"relative min-h-screen"}>
      <Image
        className={"absolute top-0 left-0 min-w-full min-h-full object-cover"}
        src={"/images/main-background.png"}
        alt={"Main Background"}
        width={844}
        height={600}
      />
      <Header />

      <div className={"relative flex w-10/12 m-auto gap-4 py-10"}>

        <div className="w-full">

          {topItems.some(item=> item === activeMenuItem) && <div className="pt-20">
            <div className="bg-yellow-300 py-4 px-4">Title</div>
            <div className="bg-red-300 min-h-40 py-4 px-4">Description</div>
          </div>}

          {bottomItems.some(item=> item === activeMenuItem) && <Layers />}

        </div>
        <div className="shrink-0"
        style={{width:`${9*radius}px`}}
        >
        <Octagon
              radius={radius}
              gap={gap}
              level={distortionActive ? distortionLevel : level}
            />
        </div>
        <div className="w-full bg-red-200 opacity-20"></div>
       

       
      </div>
    </div>
  );
}
