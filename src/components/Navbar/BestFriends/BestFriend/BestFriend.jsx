import React from "react"
import style from "./BestFriend.module.css"




let BestFriend = (props) => {
console.log(props.friends[props.id].avatar)
    return (
                <div className={style.best_friend_wrapper}> 
               <img src="../image/avatar.jpg" alt="" />

            <img className={style.avatar} src={props.friends[props.id].avatar} alt="" />
                    <p>{props.friends[props.id].name}</p>
                 </div> 
    )
}

export default BestFriend;
