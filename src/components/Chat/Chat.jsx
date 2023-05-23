import React from "react"
import style from './Chat.module.css'
import { NavLink } from "react-router-dom"


let Chat = () => {

    return (

        <div className={style.chat_wrapper}> 
            <div className={style.dialogs}>
                <NavLink className={navData => navData.isActive ? style.active : style.dialog} >Франко Коломбо</NavLink>
                <NavLink  className={navData => navData.isActive ? style.active : style.dialog} >Сильвестер Сталоне</NavLink>
                <NavLink  className={navData => navData.isActive ? style.active : style.dialog} >Саша Курицын</NavLink>
                <NavLink className={navData => navData.isActive ? style.active : style.dialog} >Дом.работница</NavLink>
            </div>
<div className={style.messages}>
<div className={style.message}>Хей Бро, как там?</div>
<div className={style.message}>Снимем еще одних неудержимых?</div>
<div className={style.message}>Уот так вот, Сашок!</div>
</div>
        </div>
    )
}

export default Chat