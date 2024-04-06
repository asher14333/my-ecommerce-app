import React, { createContext, useContext, useState } from 'react';

const Authenticator = createContext();

export const Authentication = () => useContext(Authenticator);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Authenticator.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </Authenticator.Provider>
  );
};