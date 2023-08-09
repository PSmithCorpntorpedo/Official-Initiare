import { createContext, useState } from "react";

const AuthContext = createContext({});

//this creates a context, or a state that can be used throughout the tree
//in this case, a user's info (a.k.a auth)
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
