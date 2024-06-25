import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Test = ({
  x = 0,
  y = 0,
  rotateX = 180,
  duration = 0.5,
  ease = "power1.inOut",
}) => {
  const testRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(testRef.current, {
      duration: 2,
      rotationX: -360,
      ease: "power2.inOut",
      delay: 1,
    });

    return () => {
      tl.kill();
    };
  }, [x, y, rotateX, duration, ease]);

  return (
    <div
      className="bg-transparent border-none w-full min-h-[100px] overflow-visible"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        ref={testRef}
        className="bg-yellow-500 relative w-full h-full text-center transition-all overflow-visible origin-bottom"
      >
        {/* <div
          className="absolute inset-0 bg-red-200"
          style={{
            backfaceVisibility: "hidden",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-green-200"
          style={{
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Test;
