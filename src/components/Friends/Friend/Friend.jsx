import React from "react";
import style from "./Friend.module.css";


const Friend = (props) => {

    return (
        <div className={style.friend_wrapper}>
            <img className={style.friend_avatar} src={props.avatar} alt="" />
            <p>{props.name}</p>
        </div>
    );

};

export default Friend;