import React from "react";
import SendPost from "./Myposts/Send_post";
import MyProfile from "./MyProfile/MyProfile";
import  Post from "./Post/Post"


const Profile = (props) => {

    return (
        <main>
           <MyProfile name='Арнольд Шварценеггер' dateBirdth='30 июля 1947 г.' city='Лос-Анджелес' />
            < SendPost />
            {props.postDataArr.map( (p) => <Post message={p.message} numberLikes={p.numberLikes} />)}
        </main>
    )
}

export default Profile;
