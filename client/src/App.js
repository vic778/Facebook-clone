import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profil from './pages/Profil';


const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/profil' element={<Profil />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path="" element={<Navigate to="/" />} />
    </Routes>
      
    </>
  );
};

export default App;