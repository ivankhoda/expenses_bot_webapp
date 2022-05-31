import React from "react";
import { MenuItem } from "../Link/Link";
import "./Menu.style.scss";
//TODO make components as array
export const Menu = () => {
  // const click = (e: Event) => {
  //   e.preventDefault();
  //   //@ts-ignore
  //   window.Telegram.WebApp.sendData("hello");
  // };
  return (
    <ul className="Menu">
      <MenuItem linkTo="/" text="Main" />
      <MenuItem linkTo="/" text="Statistics" />
    </ul>
  );
};
