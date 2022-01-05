import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Profil from './pages/Profil';


const App = () => {
  return (
    <>
    <Routes>
    {/* <Route path='/' element={<Home />} /> */}
    <Route path='/' element={<Profil />} />
    </Routes>
      
    </>
  );
};

export default App;