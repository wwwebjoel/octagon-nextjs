"use client";

import React, { useEffect, useState } from "react";
import Octagon from "@/components/Octagon";
import Image from "next/image";
import Header from "@/components/header/Header";
import WordsBox from "@/components/boxes/WordsBox";

import Properties from "@/components/properties/Properties";
import Landscape from "@/components/firstLoad/landscape";
import { useSelector } from "react-redux";
import OctagonSVG from "@/components/images/Octagon";

export default function Home() {
  const radius = 80;
  const gap = 80;
  const level = [1, 2, 3, 4];
  const distortionLevel = [1, 2, 2.5, 3, 4];

  const activeBottomMenuItem = useSelector(
    (state: any) => state.entities.header.activeBottomMenuItem
  );

  const distortionActive = activeBottomMenuItem === "distortions";

  const modules: any = useSelector<any>((state) => state.entities.modules);
  const [showLandscape, setShowLandscape] = useState(false);

  const menuItems = {
    roots: 4,
    foundations: 3,
    essence: 2,
    contributions: 1,
    constellations: 0,
  };

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
            <div className="flex flex-col items-center gap-5">
              <WordsBox />
              <div className=" relative items-center flex flex-col pt-32">
                {Array.from({ length: 5 }, (_, i) => {
                  const isActive = Object.entries(menuItems).some(
                    ([key, value]) =>
                      activeBottomMenuItem === key && i === value
                  );

                  return (
                    <div
                      key={i}
                      className="relative"
                      style={{ zIndex: 10 - i }}
                    >
                      <OctagonSVG active={isActive} />{" "}
                    </div>
                  );
                })}
              </div>
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
