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


let App = () => {
  return (

    <BrowserRouter>

      <div className="App-wrapper">

        <Header />

        <Navbar />

        <div className='app-content-wrapper'>
          <Routes>
            <Route path='/profile' Component={Profile} />
            <Route path='/chat' Component={Chat} />
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

