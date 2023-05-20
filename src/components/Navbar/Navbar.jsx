import React from "react"
import style from "./Navbar.module.css"
import profileIcon from '../../image/prof.svg'
import messageIcon from '../../image/message.svg'
import magazineIcon from '../../image/magazine.svg'
import friendsIcon from '../../image/friends.svg'
import customizationIcon from '../../image/customization.svg'


let Navbar = () => {

    return (
        <div className={style.navbar}>

            <a href='#'> <img src={profileIcon} alt='Мой Профиль' />Мой Профиль</a>
            <a href='#'> <img src={messageIcon} alt='Сообщения' />Сообщения</a>
            <a href='#'><img src={magazineIcon} alt='Лента новостей' /> Лента новостей</a>
            <a href='#'><img src={friendsIcon} alt='Друзья' /> Друзья</a>
            <a href='#' className={style.customization}><img src={customizationIcon} alt='Настройки' /> Настройки</a>

        </div>

    )
}

export default Navbar
