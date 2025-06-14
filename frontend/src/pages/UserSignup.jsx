import React from 'react'
import {Link , useNavigate} from 'react-router-dom' 
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'


const UserSignup = () => {
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  
  const navigate = useNavigate();


  const {user,setUser}= React.useContext(UserDataContext)



  const handleSubmit = async(e) => {
    e.preventDefault();
    const newUser= {fullname:{firstname, lastname}, email:email, password:password};
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if(response.status === 201){
      const data= response.data; 

      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');

    }
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-14 mb-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <h3 className="text-lg font-medium mb-2">Create your account</h3>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className='flex gap-4'>
          <input
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#ffffff] mb-7  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-[#ffffff] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="Last Name"
            required
          />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#ffffff] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Email"
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#ffffff] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
            required
          />
          <button
            className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600">
            Login here
          </a>
        </p>
      </div>
      <div>
        <a
          href="/captain-signup"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded px-4 py-2 border w-full text-lg"
        >
          Sign up as Captain
        </a>
      </div>
    </div>
  );
}

export default UserSignup
