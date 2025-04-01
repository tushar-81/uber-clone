import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// filepath: d:\uber-clone\frontend\src\pages\CaptainLogout.jsx

const CaptainLogout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('token')
        navigate('/login')
      }
    })
    .catch((error) => {
      console.error('Logout failed:', error)
    })

  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout