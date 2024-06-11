import React from "react";

function OctagonSVG({ active=false }: { active?:boolean }) {
  return (
    <div
      style={{
        transform: `rotateX(135deg) rotateY(0deg) rotateZ(0deg)`,
      }}
    >
      <div
        className={`${active? "bg-inner-yellow bg-opacity-60": "bg-gradient-box-purple bg-opacity-80"}   w-28 aspect-square mt-[-85px] shadow-2xl`}
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          transform: `rotateX(50deg) rotateY(0deg) rotateZ(50deg)`,
          clipPath: "polygon( 29% 0, 71% 0, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0 71%, 0 29%)",
        }}
      ></div>
    </div>
  );
}

export default OctagonSVG;
