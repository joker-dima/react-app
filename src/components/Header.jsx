import React from "react"
import './Header.module.css'

let Header = () => {

    return (
        <header>
            <img src={require('../image/logo.png')} alt='Логотип соц.сети' />
            <h1>Eaglebook </h1>

        </header>
    )
}

export default Header