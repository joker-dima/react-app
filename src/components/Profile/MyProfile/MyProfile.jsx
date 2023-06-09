import React from "react";
import style from "./MyProfile.module.css"


const MyProfile = (props) => {
    return (
        <div className={style.my_profile}>
                <img src={require('../../../image/avatar.jpg')} alt='Логотип соц.сети' />
                <div className={style.my_profile_content}>
                    <h2>{props.name}</h2>
                    <p>Дата рождения: <span>{props.dateBirdth} </span></p>
                    <p>Город: <span>{props.city}</span> </p>
                </div>
            </div>

    )
}

export default MyProfile;
