import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const UserProtectWrapper = ({children}) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()  

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('User profile fetch failed:', error);
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, [token, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {children}
    </div>
  );
}

export default UserProtectWrapper
