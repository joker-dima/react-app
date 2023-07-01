import React from "react"
import style from "../BestFriends/BestFriends.module.css"
import BestFriend from "./BestFriend/BestFriend"
// import { NavLink } from "react-router-dom"



let BestFriends = (props) => {

    return (
        
      <div className={style.best_friends_wrapper}>
          <BestFriend id='0' names={props.names}/>
          <BestFriend id='1' names={props.names}/>
          <BestFriend id='2' names={props.names}/>
               </div>
          
         



    )
}

export default BestFriends;
