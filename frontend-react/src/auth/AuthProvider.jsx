// Apenas pra esqueleto

import { createContext, useContext } from "react";

const AuthContext = createContext({}); 

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={{ isAuthenticated: false }}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => useContext(AuthContext);