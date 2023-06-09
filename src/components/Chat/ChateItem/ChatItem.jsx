import React from "react";
import style from "./ChatItem.module.css";
import { NavLink } from "react-router-dom";

const ChateItem = (props) => {
  const path = "/chat/" + props.chateID;

  return (
    <NavLink
      to={path}
      className={(navData) => (navData.isActive ? style.active : style.dialog)}
    >
      <p>{props.name}</p>
    </NavLink>
  );
};



export default ChateItem;
