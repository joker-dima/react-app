import React from "react";
import style from "./Profile.module.css"

let Profile = () => {

    return (

        <main>

            <div className={style.my_profile}>
                <img src={require('../image/avatar.jpg')} alt='Логотип соц.сети' />
                <div className={style.my_profile_content}>
                    <h2>Арнольд Шварценеггер</h2>
                    <p>Дата рождения: <span>30 июля 1947 г. </span></p>
                    <p>Город:<span> Лос-Анджелес</span> </p>
                </div>
            </div>
            <div className={style.posts}>
                <textarea className={style.new_post} name="new-post" placeholder='Что нового?' cols="40" rows="3"></textarea>
                <input className={style.button_submit} type='submit' value="Опубликовать"></input>
            </div>
            <div className={style.post}>
                <img className={style.post_avatar} src={require('../image/avatar.jpg')} alt='Логотип соц.сети' />

                <p>Dude, let's go 2 gym?</p>
            </div>

        </main>


    )

}

export default Profile;
