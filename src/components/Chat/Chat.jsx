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

const chatDatas = [
  {id:1, name:"Франко Коломбо"},
  {id:2, name:"Сильвестер Сталоне"},
  {id:3, name:"Саша Курицын"},
  {id:4, name:"Дом.работница"}
]

const ChatMessages = [
  {message:'Хей Бро, как там??'},
  {message:'Снимем еще одних неудержимых?'},
  {message:'Уот так вот, Сашок!'}
]

const Chat = () => {
  return (
    <div className={style.chat_wrapper}>
      <div className={style.dialogs}>
        <ChateItem name={chatDatas[0].name} chateID={chatDatas[0].id} />
        <ChateItem name={chatDatas[1].name} chateID={chatDatas[1].id} />
        <ChateItem name={chatDatas[2].name} chateID={chatDatas[2].id} />
        <ChateItem name={chatDatas[3].name} chateID={chatDatas[3].id} />
        
      </div>

      <div className={style.messages}>

        < ChatMessage message={ChatMessages[0].message} />
        < ChatMessage message={ChatMessages[1].message} />
        < ChatMessage message={ChatMessages[2].message} />
    
      </div>
    </div>
  );
};

export default Chat;
