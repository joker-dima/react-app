import React from "react"
import style from "../BestFriends/BestFriends.module.css"
import BestFriend from "./BestFriend/BestFriend"
// import { NavLink } from "react-router-dom"



let BestFriends = (props) => {

    return (
        
      <div className={style.best_friends_wrapper}>
          <BestFriend id='0' friends={props.friends}/>
          <BestFriend id='1' friends={props.friends}/>
          <BestFriend id='2' friends={props.friends}/>
               </div>
          
         



    )
}

export default BestFriends;
