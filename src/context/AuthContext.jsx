// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, email }
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = ({ email }) => {
    // Fake login: set a default user
    setUser({
      name: "Demo User",
      email,
    });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
