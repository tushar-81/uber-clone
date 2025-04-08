import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/userlogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import Userlogout from './pages/UserLogout'; 
import CaptainHome from './pages/CaptainHome'; 
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup' element={<UserSignup/>} />
      <Route path='/Riding' element={<Riding />} />
      <Route path='/captain-riding' element={<CaptainRiding />} />
      <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignup />} />
      <Route path='/home' element={
        <UserProtectWrapper>
          <Home />
        </UserProtectWrapper>} />
      <Route path='/user/logout' element={ <UserProtectWrapper>
        <Userlogout />
      </UserProtectWrapper>} />
      <Route path='/captain-home' element={
        <CaptainProtectWrapper>
          <CaptainHome />
        </CaptainProtectWrapper>} />
        
    </Routes>
  );
}

export default App;