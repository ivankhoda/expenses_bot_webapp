import React from "react";
import { Menu } from "../Menu/Menu";
import "./Sidebar.style.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo"></div>
      <Menu />
    </div>
  );
};
