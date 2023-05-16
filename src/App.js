import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header';
import Login from './Components/Login'
import Register from './Components/Register';
import MyCalendar from './Layouts/Calendar';
import Main from './Layouts/Main';
import MyProfile from './Components/MyProfile';
import Account from './Components/Account';
import SnsUpload from './Components/Upload/SnsUpload';
import TodoUpload from './Components/Upload/TodoUpload';


function HeaderCalendar() {
  return (
    <>
      <div><Header /></div>
      <div><MyCalendar /></div>
    </>
  )
}

function MainCalendar(){
  return(
    <>
      <div><Main /></div>
      <div><MyCalendar /></div>
    </>
  )
}



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderCalendar />} />
          <Route path='/main' element={<MainCalendar />} />
          <Route path='/login' element={<Login />} />
          <Route path='SnsUpload' element={<SnsUpload />} />
          <Route path='TodoUpload' element={<TodoUpload />} />
          <Route path='/register' element={<Register />} />
          <Route path='/myProfile' element={<MyProfile />} />
          <Route path='/setAccount' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;