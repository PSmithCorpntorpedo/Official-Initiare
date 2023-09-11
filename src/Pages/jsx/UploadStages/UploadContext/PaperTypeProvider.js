import { createContext, useState } from "react";

const PaperTypeContext = createContext({});

//this creates a context, or a state that can be used throughout the tree
//in this case, the categories the user has selected
export const PaperTypeProvider = ({ children }) => {
  const [paperType, setPaperType] = useState("");

  return (
    <PaperTypeContext.Provider value={{paperType, setPaperType }}>
      {children}
    </PaperTypeContext.Provider>
  );
};

export default PaperTypeContext;