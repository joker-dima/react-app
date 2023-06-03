import React from "react";
import style from "./Post.module.css"





let Post = (props) => {

    return (

        <div className={style.post}>

            <div className={style.post_message_wrapper}>
                <img className={style.post_avatar} src={require('../../../image/avatar.jpg')} alt='Логотип соц.сети' />
                <div className="user_name">Арнольд:</div>
            </div>

            <div className={style.message} >{props.message}</div>
            <div className={style.likes_wrapper}>
                <img src={require('../../../image/like.png')} alt='Лайк' /> {props.number_likes}
            </div>


        </div>


    )

}

export default Post;
