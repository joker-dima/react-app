import React from "react";
import style from "./Chat.module.css";
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

const ChatMessage = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  )
}

const Chat = () => {
  return (
    <div className={style.chat_wrapper}>
      <div className={style.dialogs}>
        <ChateItem name="Франко Коломбо" chateID="1" />
        <ChateItem name="Сильвестер Сталоне" chateID="2" />
        <ChateItem name="Саша Курицын" chateID="3" />
        <ChateItem name="Дом.работница" chateID="4" />
        
      </div>

      <div className={style.messages}>

        < ChatMessage message="Хей Бро, как там?" />
        < ChatMessage message="Снимем еще одних неудержимых?" />
        < ChatMessage message="Уот так вот, Сашок!" />
    
      </div>
    </div>
  );
};

export default Chat;
