import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {  Route, Routes,  } from 'react-router-dom'
import Login from './components/Login';
import Contact from './components/Contact'
import Register from './components/Register';
import About from './components/About';
import React from 'react';
import Error from './components/Error';


function App() {
  return (<>
  

    <Navbar />


    <Routes> 
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/about' element={<About />} />
      <Route path='*' element={<Error/>}/>
    </Routes>

    







  </>
  );
}

export default App;
