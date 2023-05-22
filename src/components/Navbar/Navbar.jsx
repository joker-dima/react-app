import React from "react"
import style from "./Navbar.module.css"
import profileIcon from '../../image/prof.svg'
import messageIcon from '../../image/message.svg'
import magazineIcon from '../../image/magazine.svg'
import friendsIcon from '../../image/friends.svg'
import customizationIcon from '../../image/customization.svg'
import { NavLink } from "react-router-dom"



let Navbar = () => {

    return (
        <div className={style.navbar}>
            <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.link}  > <img className={style.link_icon} src={profileIcon} alt='Мой Профиль' />Мой профиль</NavLink>
            <NavLink to='/chat' className={navData => navData.isActive ? style.active : style.link} > <img className={style.link_icon} src={messageIcon} alt='Сообщения' />Сообщения</NavLink >
            <NavLink to='/news' className={navData => navData.isActive ? style.active : style.link} ><img className={style.link_icon} src={magazineIcon} alt='Лента новостей' /> Лента новостей</NavLink >
            <NavLink to='/friends' className={navData => navData.isActive ? style.active : style.link} ><img className={style.link_icon} src={friendsIcon} alt='Друзья' /> Друзья</NavLink >
            <NavLink to='/settings' className={navData => navData.isActive ? style.active : style.link} ><img className={style.link_icon} src={customizationIcon} alt='Настройки' /> Настройки</NavLink >

        </div >

    )
}

export default Navbar
