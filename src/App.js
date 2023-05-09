import React from 'react';
import './App.css';
import profileIcon from './image/prof.svg'
import messageIcon from './image/message.svg'
import magazineIcon from './image/magazine.svg'
import friendsIcon from './image/friends.svg'
import customizationIcon from './image/customization.svg'


let App = () => {
  return (
    <div className="App-wrapper">

      <header>
        <img src={require('./image/logo.png')} alt='Логотип соц.сети' />

        <h1>Eaglebook </h1>

      </header>

      <div className='sidebar'>

        <a href='#'> <img src={profileIcon} alt='Мой Профиль' />Мой Профиль</a>
        <a href='#'> <img src={messageIcon} alt='Сообщения' />Сообщения</a>
        <a href='#'><img src={magazineIcon} alt='Лента новостей' /> Лента новостей</a>
        <a href='#'><img src={friendsIcon} alt='Друзья' /> Друзья</a>
        <a href='#' className='customization'><img src={customizationIcon} alt='Настройки' /> Настройки</a>



      </div>

      <main>
        <div className='search-bar'></div>
        <div className='wallpaper'></div>
        <div className='my-profile'>
          <img src={require('./image/avatar.jpg')} alt='Логотип соц.сети' />
          <div className='my-profile-content'>
            <h2>Арнольд Шварценеггер</h2>
            <p>Дата рождения: <span>30 июля 1947 г. </span></p>
            <p>Город:<span> Лос-Анджелес</span> </p>
          </div>
        </div>
        <div className='posts'>
          <textarea name="new-post" cols="40" rows="3"></textarea>
          <input type='submit' value="Опубликовать"></input>
        </div>
        <div className='post'>
          <img className='post-avatar ' src={require('./image/avatar.jpg')} alt='Логотип соц.сети' />

          <p>Dude, let's go 2 gym?</p>
        </div>

      </main>




    </div >
  );
}



export default App;

