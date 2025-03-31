import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstname, setfirstName] = React.useState('');
  const [lastname, setlastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [captainData, setCaptainData] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ fullname:{firstname,lastname}, email, password });
    setfirstName('');
    setlastName('');
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
            <h3 className="text-lg font-medium mb-2">Register as a Captain</h3>
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-medium mb-2">What's your name?</h3>
              <div className='flex gap-4'>
              <input
                value={firstname}
                onChange={(e) => setfirstName(e.target.value)}
                className="bg-[#ffffff] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                placeholder="Name"
                required
              />
              <input
                value={lastname}
                onChange={(e) => setlastName(e.target.value)}
                className="bg-[#ffffff] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                placeholder="Name"
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
              <a href="/captain-login" className="text-blue-600">
                Login here
              </a>
            </p>
          </div>
          <div>
            <a
              href="/signup"
              className="bg-[#b69755] flex items-center justify-center text-white font-semibold rounded px-4 py-2 border w-full text-lg"
            >
              Sign up as User
            </a>
          </div>
        </div>
      );
  
  
}

export default CaptainSignup
