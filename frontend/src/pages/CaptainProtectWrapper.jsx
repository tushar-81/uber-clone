import React, { useEffect } from 'react'
import {useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'


const CaptainProtectWrapper = ({ children }) => {
  const captainToken = localStorage.getItem('token')
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);
  const {captain, setCaptain} = useContext(CaptainDataContext)

  useEffect(() => {
    if (!captainToken) {
      navigate('/captain-login')
    }
  }, [captainToken, navigate])


  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {headers: {Authorization: `Bearer ${captainToken}`}}).then((response) => {  
    if(response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      setisLoading(false);
    }
  } ).catch((error) => {
    console.error('Captain profile fetch failed:', error);
    localStorage.removeItem('token');
    navigate('/captain-login');})
  



  if(isLoading) {
    return <div>Loading...</div>
  }


  return (
    <div>
      {children}
    </div>
  );
}

export default CaptainProtectWrapper