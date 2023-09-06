import { createContext, useState } from "react";

const PCategoryContext = createContext({});

//this creates a context, or a state that can be used throughout the tree
//in this case, the categories the user has selected
export const PCategoryProvider = ({ children }) => {
  const [pCategory, setPCategory] = useState("");

  return (
    <PCategoryContext.Provider value={{pCategory, setPCategory }}>
      {children}
    </PCategoryContext.Provider>
  );
};

export default PCategoryContext;