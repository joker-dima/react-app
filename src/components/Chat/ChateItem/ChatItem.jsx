import React from "react";
import style from "./ChatItem.module.css";
import { NavLink } from "react-router-dom";

const ChateItem = (props) => {
  const path = "/chat/" + props.chateID;

  if (props.messageCount != 0) {

    return (
      <NavLink
        to={path}
        className={(navData) => (navData.isActive ? style.active : style.dialog)}
      >
        <img className={style.chat_avatar} src={props.avatar} alt="" />
        <p>{props.name}</p>

        <p className={style.message_count}>{'(' + props.messageCount + ')'}</p>
      </NavLink>
    );
  }
  else {
    return (
      <NavLink
        to={path}
        className={(navData) => (navData.isActive ? style.active : style.dialog)}
      >
        <img className={style.chat_avatar} src={props.avatar} alt="" />
        <p>{props.name}</p>

        <p className={style.message_count}></p>
      </NavLink>
    );
  }
}


export default ChateItem;
