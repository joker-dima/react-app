import React from "react";
import style from "./Chat.module.css";
import ChateItem from "./ChateItem/ChatItem";
import ChatMessage from "./ChatMessage/ChatMessage";

const Chat = (props) => {
  return (
    <div className={style.chat_wrapper}>
      <div className={style.dialogs}>
        {props.chatNamesArr.map(n => <ChateItem messageCount={n.messageCount} avatar={n.avatar} name={n.name} chateID={n.id} />)}

      </div>

      <div className={style.messages}>
        {props.ChatMessagesArr.map(m => < ChatMessage message={m.message} />)}
      </div>
    </div>
  );

};

export default Chat;
