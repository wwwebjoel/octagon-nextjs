import React from "react";

function Unity({ selected = false }: { selected?: boolean }) {
  return (
    <div
      className={`${
        selected ? "bg-[#FFF500]" : "bg-white  bg-opacity-50"
      } w-5 aspect-square rounded-full flex justify-center items-center`}
    >
      <div
        className={`${
          selected ? "bg-[#FFAC01]" : "bg-white"
        } h-3 aspect-square rounded-full`}
      ></div>{" "}
    </div>
  );
}

export default Unity;
