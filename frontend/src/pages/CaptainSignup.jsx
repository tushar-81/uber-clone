import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {
  
  
  const [firstname, setfirstName] = React.useState('');
  const [lastname, setlastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [captainData, setCaptainData] = React.useState({});
  const [vehicleColor, setVehicleColor] = React.useState('');
  const [vehiclePlate, setVehiclePlate] = React.useState('');
  const [capacity, setCapacity] = React.useState('');
  const [vehicleTypes, setVehicleTypes] = React.useState('');
  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: { firstname, lastname },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: capacity,
        vehicleType: vehicleTypes,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    if(response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    
    setfirstName('');
    setVehicleColor('');
    setVehiclePlate('');
    setCapacity('');
    setVehicleTypes('');
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
          <div className="flex gap-4">
            <input
              value={firstname}
              onChange={(e) => setfirstName(e.target.value)}
              className="bg-[#ffffff] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              value={lastname}
              onChange={(e) => setlastName(e.target.value)}
              className="bg-[#ffffff] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
          {/* Combined Vehicle Information */}
          <div className="border p-4 mb-7 rounded">
            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please provide details about your vehicle.
            </p>
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-[#ffffff] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color (e.g., Red)"
              required
            />
            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-[#ffffff] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate (e.g., ABC-123)"
              required
            />
            <input
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="bg-[#ffffff] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="number"
              placeholder="Capacity (number of passengers)"
              required
            />
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Select Vehicle Type:</p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className={`w-full rounded px-4 py-2 border text-lg ${
                    vehicleTypes === "auto rickshaw"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setVehicleTypes("auto rickshaw")}
                >
                  Auto Rickshaw
                </button>
                <button
                  type="button"
                  className={`w-full rounded px-4 py-2 border text-lg ${
                    vehicleTypes === "bike"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setVehicleTypes("bike")}
                >
                  Bike
                </button>
                <button
                  type="button"
                  className={`w-full rounded px-4 py-2 border text-lg ${
                    vehicleTypes === "car"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setVehicleTypes("car")}
                >
                  Car
                </button>
              </div>
            </div>
          </div>
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
