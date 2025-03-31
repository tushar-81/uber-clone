import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
      <img className='w-14 mb-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' ></img>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCaptainData({ email, password });
        setEmail('');
        setPassword('');  }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=' bg-[#ffffff] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder="Email" required />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=' bg-[#ffffff] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder="Password" required />
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="submit">Login</button>

        
      </form>
      <p className='text-center '>Join a fleet?<Link to='/signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-[#b69755] flex item-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
       
      
    </div>

  );
  
}

export default CaptainLogin
