"use client";
import React from "react";
import { Button4 } from "@/components/common/Buttons";
import headerData from "@/data/header.json";
import { useDispatch, useSelector } from "react-redux";
import { activeMenuItemChanged } from "@/store/header";
import { handleClick } from "../BottomHeader";

interface HeaderItem {
  title: string;
}

const TopMenu = () => {
  const dispatch = useDispatch();
  const { activeMenuItem }: any = useSelector<any>(
    (state) => state.entities.header
  );

  const clicked = (title: string, dispatch: any) => {
    handleClick(title, dispatch);
    dispatch(activeMenuItemChanged({ item: title }));
  };

  return (
    <div
      className={
        "overflow-hidden w-max min-w-[300px] h-12 flex items-stretch rounded-[20px]"
      }
    >
      {headerData?.topHeader?.map((data: HeaderItem) => {
        const { title } = data;
        return (
          <div key={title} onClick={() => clicked(title, dispatch)}>
            <Button4 label={title} active={title === activeMenuItem} />
          </div>
        );
      })}
    </div>
  );
};

export default TopMenu;
