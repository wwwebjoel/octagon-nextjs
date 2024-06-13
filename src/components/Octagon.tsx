import React from "react";
import Points from "@/components/Points";
import Lines from "@/components/Lines";
import Trapezoids from "@/components/Trapezoids";
import Center from "@/components/Center";
import Stars from "@/components/Stars";
import ConstellationLine from "./ConstellationLine";
import DistortionLine from "./DistortionLine";
import { useSelector } from "react-redux";
import OctagonSVG from "./images/Octagon";

interface OctagonProps {
  radius: number;
  gap: number;
  level: number[];
}

const Octagon: React.FC<OctagonProps> = ({ radius, gap, level }) => {
  const octagonDiameter = 2 * (radius + 3 * gap);

  return (
    <div className={"relative p-10"}>
      <Layers />

      <div
        className="relative"
        style={{
          width: octagonDiameter,
          height: octagonDiameter,
        }}
      >
        <div className="relative w-full h-full origin-center flex items-center justify-center">
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-0 h-0 relative">
                {/* Center Point */}
                <Center radius={radius} />

                {/* {Array.from({ length: level }).map((_, index) => {
                  const level = index + 1;
                  return (
                    <React.Fragment key={level}>
                      <Points radius={radius} gap={gap} level={level} />
                      <Lines radius={radius} gap={gap} level={level} />
                      <Trapezoids gap={gap} radius={radius} level={level} />
                    </React.Fragment>
                  );
                })} */}

                {level.map((singleLevel, index) => {
                  return (
                    <React.Fragment key={singleLevel}>
                      <div className="relative" style={{ zIndex: 500 }}>
                        <Points radius={radius} gap={gap} level={singleLevel} />
                      </div>
                      <div className="relative" style={{ zIndex: 400 }}>
                        {" "}
                        <Lines radius={radius} gap={gap} level={singleLevel} />
                      </div>
                      <div className="relative" style={{ zIndex: 300 }}>
                        {" "}
                        <Trapezoids
                          gap={gap}
                          radius={radius}
                          level={singleLevel}
                        />
                      </div>
                    </React.Fragment>
                  );
                })}

                {/* <ConstellationLine radius={radius} gap={gap} level={level} /> */}
                {/* <DistortionLine radius={radius} gap={gap} level={level} /> */}
                <div className={"origin-center rotate-[22.5deg]"}>
                  <Stars radius={radius} gap={gap} level={level.length - 1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Layers = () => {
  const activeBottomMenuItem = useSelector(
    (state: any) => state.entities.header.activeBottomMenuItem
  );

  const menuItems = {
    roots: 4,
    foundations: 3,
    essence: 2,
    contributions: 1,
    constellations: 0,
  };
  return (
    <div className=" absolute top-0 left-0 items-center flex flex-col pt-10 pl-5">
      {Array.from({ length: 5 }, (_, i) => {
        const isActive = Object.entries(menuItems).some(
          ([key, value]) => activeBottomMenuItem === key && i === value
        );

        return (
          <div key={i} className="relative" style={{ zIndex: 10 - i }}>
            <OctagonSVG active={isActive} />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Octagon;
