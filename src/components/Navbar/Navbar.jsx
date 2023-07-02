import React from "react"
import style from "./Navbar.module.css"
import profileIcon from '../../image/prof.svg'
import messageIcon from '../../image/message.svg'
import magazineIcon from '../../image/magazine.svg'
import friendsIcon from '../../image/friends.svg'
import customizationIcon from '../../image/customization.svg'
import { NavLink } from 'react-router-dom'
import BestFriends from "./BestFriends/BestFriends";
import state from "../../redux/state"


// Функция подсчета общего кол-ва сообщений
let messagescount = 0;
for (let i = 0; i < state.chat.chatNamesArr.length; i++) {
    messagescount = messagescount + Number(state.chat.chatNamesArr[i].messageCount);
}

if (messagescount != 0) {
    messagescount = '(' + messagescount + ')'
}

else {
    messagescount = ''
}



let Navbar = (props) => {

    return (


        <div className={style.navbar}>
            <div>
                <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.link}  > <img className={style.link_icon} src={profileIcon} alt='Мой Профиль' />Мой профиль</NavLink>
                <NavLink to='/chat' className={navData => navData.isActive ? style.active : style.link} > <img className={style.link_icon} src={messageIcon} alt='Сообщения' />Сообщения {messagescount} </NavLink >
                <NavLink to='/news' className={navData => navData.isActive ? style.active : style.link} ><img className={style.link_icon} src={magazineIcon} alt='Лента новостей' /> Лента новостей</NavLink >
                <NavLink to='/friends' className={navData => navData.isActive ? style.active : style.link} ><img className={style.link_icon} src={friendsIcon} alt='Друзья' /> Друзья</NavLink >
                <NavLink to='/settings' className={navData => navData.isActive ? style.active : style.link} ><img className={style.link_icon} src={customizationIcon} alt='Настройки' /> Настройки</NavLink >
            </div>
            < BestFriends friends={state.chat.chatNamesArr} />
        </div >

    )

}

export default Navbar
