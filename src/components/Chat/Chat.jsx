import React from "react";
import style from "./Chat.module.css";
import ChateItem from "./ChateItem/ChatItem";


let ChatMessage = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  )
}

let chatNamesArr = [
  {id:1, name:"Франко Коломбо"},
  {id:2, name:"Сильвестер Сталоне"},
  {id:3, name:"Саша Курицын"},
  {id:4, name:"Дом.работница"}
]

let ChatMessagesArr = [
  {message:'Хей Бро, как там??'},
  {message:'Снимем еще одних неудержимых?'},
  {message:'Уот так вот, Сашок!'}
]


let ChatMessages = ChatMessagesArr.map( m =>  < ChatMessage message={m.message}/>)
let ChatNames = chatNamesArr.map( n => <ChateItem name={n.name} chateID={n.id} /> )

const Chat = () => {
  return (
    <div className={style.chat_wrapper}>
      <div className={style.dialogs}>
      { ChatNames }
        
      </div>

      <div className={style.messages}>
       { ChatMessages }
          </div>
    </div>
  );
};

export default Chat;
