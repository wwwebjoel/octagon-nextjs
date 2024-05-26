import React from "react";
import Points from "@/components/Points";
import Lines from "@/components/Lines";
import Trapezoids from "@/components/Trapezoids";
import Center from "@/components/Center";
import Stars from "@/components/Stars";
import ConstellationLine from "./ConstellationLine";
import DistortionLine from "./DistortionLine";

interface OctagonProps {
  radius: number;
  gap: number;
  level: number[];
}

const Octagon: React.FC<OctagonProps> = ({ radius, gap, level }) => {
  const octagonDiameter = 2 * (radius + (level.length - 1) * gap);
  return (
    <div className={"relative p-10"}>
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
                      <Points radius={radius} gap={gap} level={singleLevel} />
                      <Lines radius={radius} gap={gap} level={singleLevel} />
                      <Trapezoids gap={gap} radius={radius} level={singleLevel} />
                    </React.Fragment>
                  );
                })}

                {/* <ConstellationLine radius={radius} gap={gap} level={level} /> */}
                {/* <DistortionLine radius={radius} gap={gap} level={level} /> */}
                <div className={"origin-center rotate-[22.5deg]"}>
                  <Stars radius={radius} gap={gap} level={level.length-1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Octagon;
