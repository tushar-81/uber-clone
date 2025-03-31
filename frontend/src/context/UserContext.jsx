import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const UserDataContext = createContext()
const [user, setUser] = useState({});
const UserContext = ({children}) => {
  return (
    <div>
      <UserDataContext.Provider value={[user,setUser]} >
        {children}
      </UserDataContext.Provider>
      
    </div>
  )
}

export default UserContext
