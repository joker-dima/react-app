import React from "react"
import style from './Header.module.css'


let Header = () => {

    return (
        <header>
            <div className={style.logo}>
                <div className={style.logo_wrapper}>
                    <img src={require('../../image/logo.png')} alt='Логотип соц.сети' />
                    <h1>Eaglebook </h1>
                </div>
            </div>

        </header >
    )
}

export default Header