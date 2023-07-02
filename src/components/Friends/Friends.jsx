import React from "react";
import style from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {

    return (
        <div className={style.chat_wrapper}>
            {props.FriendsArr.map(n => <Friend messageCount={n.messageCount} avatar={n.avatar} name={n.name} chateID={n.id} />)}
        </div>
    );

};

export default Friends;