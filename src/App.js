import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
import Register from './pages/Register';
// import Home from './pages/Home';
// import Profil from './pages/Profil';


const App = () => {
  return (
    <>
    <Routes>
    {/* <Route path='/' element={<Home />} /> */}
    {/* <Route path='/' element={<Profil />} /> */}
    {/* <Route path='/' element={<Login />} /> */}
    <Route path='/' element={<Register />} />
    </Routes>
      
    </>
  );
};

export default App;