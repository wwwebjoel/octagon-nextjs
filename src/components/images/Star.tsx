import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Clarity from "@/components/anchors/Clarity";
import Unity from "@/components/anchors/Unity";
import Patience from "@/components/anchors/Patience";
import Balance from "@/components/anchors/Balance";
import Optimism from "@/components/anchors/Optimism";
import Boundaries from "@/components/anchors/Boundaries";
import Flow from "@/components/anchors/Flow";
import Aspiration from "@/components/anchors/Aspiration";
import { AnchorTips } from "@/components/AnchorTips";
import gsap from "gsap";

function Star({
  color = "#fff",
  index = 0,
}: {
  color?: string;
  index?: number;
}) {
  const selectedLevel = useSelector(
    (state: any) => state.entities.currentSelection.level
  );

  const {activeMenuItem} = useSelector((state: any) => state.entities.header)

  const randomNumber = Math.random() + 1;

  useEffect(() => {
    const anim1 = gsap.timeline();
    const anim2 = gsap.timeline();

    anim2.to(`#star-${index}`, {
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: randomNumber,
      ease: "easeInOut",
    });
  }, []);

  useEffect(() => {
    if(activeMenuItem === "constellations"){
      const tl1 = gsap.timeline();
    tl1
      .to(".stars", {
        duration: 0.5,
        scale: 3.5,
      })
      .to(".stars", {
        duration: 0.5,
        scale: 1
      });

    return () => {
      tl1.kill();
    };
    }
  }, [activeMenuItem]);

  return (
    <div
      className="stars absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-point left-0 top-0 p-1  w-[70px] aspect-square"
      key={index}
    >
      <div
        id={`star-${index}`}
        className=" absolute inset-0 rounded-full flex items-center justify-center opacity-0"
      >
        <div
          className="w-1 h-1 rounded-full"
          style={{
            boxShadow: "0px 0px 20px 20px rgba(255,255,255,.35)",
          }}
        ></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={"relative star w-full h-full"}
        fill="none"
        viewBox="0 0 63 62"
      >
        <g filter="url(#filter0_d_262_29919)">
          <mask
            id="mask0_262_29919"
            style={{ maskType: "alpha" }}
            width="33"
            height="32"
            x="15"
            y="11"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#D9D9D9"
              d="M15.773 11H47.772999999999996V43H15.773z"
            ></path>
          </mask>
          <g mask="url(#mask0_262_29919)">
            <path
              fill={selectedLevel.includes(6) ? "#fdf500" : color}
              d="M25.94 19.533l3.734-4.834c.266-.355.583-.616.95-.783.366-.167.75-.25 1.15-.25.4 0 .783.083 1.15.25.366.167.683.428.95.783l3.733 4.834 5.667 1.9a2.518 2.518 0 011.366.983c.334.478.5 1.006.5 1.583 0 .267-.038.534-.116.8a2.481 2.481 0 01-.384.767l-3.666 5.2.133 5.467c.022.778-.233 1.433-.767 1.966-.533.534-1.155.8-1.866.8-.045 0-.29-.033-.734-.1l-5.966-1.666-5.967 1.666a1.263 1.263 0 01-.367.084 4.444 4.444 0 01-.366.016c-.711 0-1.334-.266-1.867-.8-.533-.533-.789-1.188-.767-1.966l.134-5.5-3.634-5.167a2.483 2.483 0 01-.383-.767 2.844 2.844 0 01-.117-.8c0-.555.162-1.072.484-1.55a2.604 2.604 0 011.35-1.016l5.666-1.9z"
            ></path>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_262_29919"
            width="62"
            height="62"
            x="0.773"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_262_29919"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_262_29919"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Star;
