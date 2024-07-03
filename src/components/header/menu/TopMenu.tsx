"use client";
import React from "react";
import { Button4 } from "@/components/common/Buttons";
import headerData from "@/data/header.json";
import { useDispatch, useSelector } from "react-redux";
import { handleClick } from "../BottomHeader";

interface HeaderItem {
  title: string;
}

const TopMenu = () => {
  const dispatch = useDispatch();
  const { activeMenuItem }: any = useSelector<any>(
    (state) => state.entities.header
  );

  return (
    <div
      className={
        "overflow-hidden w-max min-w-[300px] h-12 flex items-stretch rounded-[20px]"
      }
    >
      {headerData?.topHeader?.map((data: HeaderItem) => {
        const { title } = data;
        return (
          <div key={title} onClick={() => handleClick(title, dispatch)}>
            <Button4 label={title} active={title === activeMenuItem} />
          </div>
        );
      })}
    </div>
  );
};

export default TopMenu;
