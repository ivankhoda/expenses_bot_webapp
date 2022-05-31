import React from "react";
import { MenuItem } from "../Link/Link";
import "./Menu.style.scss";
//TODO make components as array
export const Menu = () => {
  const click = () => {
    //@ts-ignore
    window.Telegram.WebApp.sendData("hello duuude");
  };
  return (
    <ul className="Menu">
      <MenuItem linkTo="/" text="Main" onClick={click} />
      <MenuItem linkTo="/" text="Statistics" onClick={click} />
    </ul>
  );
};
