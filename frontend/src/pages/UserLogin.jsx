import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { user, setUser } = React.useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
      <img className='w-14 mb-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' ></img>
      <form onSubmit={async(e) => {
        e.preventDefault();
        const userData = { email: email, password: password };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

        if(response.status === 200) {
          const data = response.data;
          setUser(data.user);
          localStorage.setItem('token', data.token);
          navigate('/home');
        }
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
      <p className='text-center '>New here?<Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex item-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
       
      
    </div>


   

  );
};

export default UserLogin;