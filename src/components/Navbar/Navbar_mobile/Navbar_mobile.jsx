import React from "react"
import style from "./Navbar_mobile.module.css"
import profileIcon from '../../../image/prof.svg'
import messageIcon from '../../../image/message.svg'
import magazineIcon from '../../../image/magazine.svg'
import friendsIcon from '../../../image/friends.svg'
import customizationIcon from '../../../image/customization.svg'
import { NavLink } from "react-router-dom"

let Navbar_mobile = () => {

    return (
        <div className={style.navbar_mobile_wrapper}>

            <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.link} > <img src={profileIcon} alt='Мой профиль' /></NavLink >
            <NavLink to='/chat' className={navData => navData.isActive ? style.active : style.link} > <img src={messageIcon} alt='Сообщения' /></NavLink >
            <NavLink to='/news' className={navData => navData.isActive ? style.active : style.link} ><img src={magazineIcon} alt='Лента новостей' /></NavLink >
            <NavLink to='/friends' className={navData => navData.isActive ? style.active : style.link} ><img src={friendsIcon} alt='Друзья' /></NavLink >
            <NavLink to='/settings' className={navData => navData.isActive ? style.active : style.link} ><img src={customizationIcon} alt='Настройки' /></NavLink >

        </div >

    )
}

export default Navbar_mobile
