"use client";

import React, { useEffect, useState } from "react";
import Octagon from "@/components/Octagon";
import Image from "next/image";
import Header from "@/components/header/Header";
import WordsBox from "@/components/boxes/WordsBox";

import Properties from "@/components/properties/Properties";
import Landscape from "@/components/firstLoad/landscape";
import { useSelector } from "react-redux";
import Test from "@/components/test/Test";

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
  const [showLandscape, setShowLandscape] = useState(false);

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

      <div className={"relative flex w-max m-auto gap-4 py-10"}>
        {modules.octagon && (
          <>
            <div className="flex flex-col">
              <WordsBox />
            </div>

            <Octagon
              radius={radius}
              gap={gap}
              level={distortionActive ? distortionLevel : level}
            />
            <Properties />
          </>
        )}

        {modules.landscape && <Landscape />}
      </div>
    </div>
  );
}
