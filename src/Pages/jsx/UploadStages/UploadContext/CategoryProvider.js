import { createContext, useState } from "react";

const CategoryContext = createContext({});

//this creates a context, or a state that can be used throughout the tree
//in this case, the categories the user has selected
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("");

  return (
    <CategoryContext.Provider value={{category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;