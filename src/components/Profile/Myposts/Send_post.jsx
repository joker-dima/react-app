import React from "react";
import style from "./Send_post.module.css"

let Send_post = () => {

    return (
        <div className={style.posts}>
            <textarea className={style.new_post} name="new-post" placeholder='Что нового?' cols="40" rows="3"></textarea>
            <input className={style.button_submit} type='submit' value="Опубликовать"></input>
        </div>
    )

}

export default Send_post;
