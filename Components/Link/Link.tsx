import React from "react";
import { Link } from "react-router-dom";
import { DashBoardIcon } from "./DashboardIcon";
import "./Link.style.scss";

type LinkProps = {
  linkTo: string;
  text: string;
  onClick?: () => void;
};

export const MenuItem = (props: LinkProps) => {
  const { linkTo, text, onClick } = props;

  return (
    <Link to={`${linkTo}`} className="MenuItem" onClick={onClick}>
      <DashBoardIcon type={text} /> {text}
    </Link>
  );
};
