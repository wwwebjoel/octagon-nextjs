import React from "react";
import { motion } from "framer-motion";

function OctagonSVG({ active=false }: { active?:boolean }) {
  return (
    <div
      style={{
        transform: `rotateX(135deg) rotateY(0deg) rotateZ(0deg)`,
      }}
    >
      <div
        className={`${active? "": "bg-gradient-box-purple bg-opacity-80"} w-[100px] min-w-[80px] max-w-[112px] aspect-square mt-[-80px] shadow-2xl`}
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          transform: `rotateX(50deg) rotateY(0deg) rotateZ(50deg)`,
          clipPath: "polygon( 29% 0, 71% 0, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0 71%, 0 29%)",
        }}
      >

       {active && <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { duration: 0. } }} className="bg-inner-yellow bg-opacity-60 absolute inset-0 scale-0 opacity-0"></motion.div>}

      </div>
    </div>
  );
}

export default OctagonSVG;
