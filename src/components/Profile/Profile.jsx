import React from "react";
import style from "./Profile.module.css"
import Send_post from "./Myposts/Send_post";
import Post from "./Post/Post";


let Profile = () => {

    return (

        <main>

            <div className={style.my_profile}>
                <img src={require('../../image/avatar.jpg')} alt='Логотип соц.сети' />
                <div className={style.my_profile_content}>
                    <h2>Арнольд Шварценеггер</h2>
                    <p>Дата рождения: <span>30 июля 1947 г. </span></p>
                    <p>Город:<span> Лос-Анджелес</span> </p>
                </div>
            </div>

            <Send_post />

            <Post message="Dude, let's go 2 gym?" number_likes="5" />
            <Post message="I'm hungry!" number_likes="2" />
            <Post message="Light weight, baby!!! Light weight!" number_likes="3" />

        </main>


    )

}

export default Profile;
