import React from "react";
import style from "./Profile.module.css"
import Posts from "./Myposts/Posts";
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

            <Posts />


            <Post message="Dude, let's go 2 gym?" number_likes="5" />
            <Post message="I'm hungry!" number_likes="2" />



        </main>


    )

}

export default Profile;
