import React from 'react';

import SignupPage from './Routes/signup';
import { Navbar } from './components';
import Home from './Routes/Home'
import Book from './Routes/Book'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Footer, Laurels, SpecialMenu } from './container';
import Login from './Routes/Login';
import { Logout } from './Routes/Logout';
const App = () => (
  <div>
    <BrowserRouter>
      
      <Navbar/>
      
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<AboutUs/>}/>
          <Route path='/Menu' element={<SpecialMenu/>}/>
          <Route path='/Awards' element={<Laurels/>}/>
          <Route path='/Book' element={<Book/>}/>
          <Route path='/Signup' element={<SignupPage/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Logout' element={<Logout/>}/>
          
        </Routes>

        <Footer/>
    
    </BrowserRouter>

  </div>
);

export default App;
