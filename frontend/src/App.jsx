import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import UserLogin from './pages/userlogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup' element={<UserSignup/>} />
      <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignup />} />
    </Routes>
  );
}

export default App;