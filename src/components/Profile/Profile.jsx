import React from "react";
import style from "./Profile.module.css"
import Send_post from "./Myposts/Send_post";
import Post from "./Post/Post";


const MyProfile = (props) => {
    return (
        <div className={style.my_profile}>
                <img src={require('../../image/avatar.jpg')} alt='Логотип соц.сети' />
                <div className={style.my_profile_content}>
                    <h2>{props.name}</h2>
                    <p>Дата рождения: <span>{props.dateBirdth} </span></p>
                    <p>Город: <span>{props.city}</span> </p>
                </div>
            </div>

    )
}

let postDataArr = [
{message:'Dude, let\'s go 2 gym', numberLikes:5},
{message:'I\'am hungry!', numberLikes:2},
{message:'Light weight, baby!!! Light weight!', numberLikes:12}

]

let postData = postDataArr.map( p => <Post message={p.message} numberLikes={p.numberLikes} />)

const Profile = () => {

    return (

        <main>

           <MyProfile name='Арнольд Шварценеггер' dateBirdth='30 июля 1947 г.' city='Лос-Анджелес' />

            <Send_post />

         {postData}

        </main>
    )

}

export default Profile;
