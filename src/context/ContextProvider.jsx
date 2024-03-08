import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('Nadiya');

    const login = username => {
        setUser(username);
    };

    const logout = () => setUser('');

    const contextValue = {user, login, logout, isLoggedIn : Boolean(user)}
  return (
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}
