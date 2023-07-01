import React from "react"
import style from "./BestFriend.module.css"




let BestFriend = (props) => {
console.log(props.names)
    return (
                <div className={style.best_friend_wrapper}> 
            <div className={style.best_friend}>
         
            </div> 
            <p>{props.names[props.id].name}</p>
                 </div> 
    )
}

export default BestFriend;
