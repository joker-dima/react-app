import React from "react";
import style from "./Post.module.css"

let Post = () => {

    return (

        <div className={style.post}>
        <img className={style.post_avatar} src={require('../../../image/avatar.jpg')} alt='Логотип соц.сети' />

        <p>Dude, let's go 2 gym?</p>
    </div>

    )

}

export default Post;
