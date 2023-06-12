import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Navbar_mobile from './components/Navbar/Navbar_mobile/Navbar_mobile';
import Chat from './components/Chat/Chat';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


let postDataArr = [
{message:'Dude, let\'s go 2 gym', numberLikes:5},
{message:'I\'am hungry!', numberLikes:2},
{message:'Light weight, baby!!! Light weight!', numberLikes:12}
]

let chatNamesArr = [
  {id:1, name:"Франко Коломбо"},
  {id:2, name:"Сильвестер Сталоне"},
  {id:3, name:"Саша Курицын"},
  {id:4, name:"Дом.работница"}
]

let ChatMessagesArr = [
  {message:'Хей Бро, как там??'},
  {message:'Снимем еще одних неудержимых?'},
  {message:'Уот так вот, Сашок!'}
]


let App = () => {
  return (

    <BrowserRouter>

      <div className="App-wrapper">
        <Header />
        <Navbar />
        <div className='app-content-wrapper'>
          <Routes>
            <Route path='/' element={<Profile postDataArr = {postDataArr} /> }/>
            <Route path='/profile' element={<Profile postDataArr = {postDataArr} /> }/>
            <Route path='/chat/*' element={ <Chat ChatMessagesArr={ChatMessagesArr} chatNamesArr={chatNamesArr} />} />
            <Route path='/news' Component={News} />
            <Route path='/friends' Component={Friends} />
            <Route path='/settings' Component={Settings} />
          </Routes>
        </div>
        <Navbar_mobile />
      </div >

    </BrowserRouter >
  );
}

export default App;

