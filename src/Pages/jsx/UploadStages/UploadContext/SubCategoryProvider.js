import { createContext, useState } from "react";

const SubCategoryContext = createContext({});

//this creates a context, or a state that can be used throughout the tree
//in this case, the categories the user has selected
export const SubCategoryProvider = ({ children }) => {
  const [subCategory, setSubCategory] = useState([]);

  return (
    <SubCategoryContext.Provider value={{subCategory, setSubCategory }}>
      {children}
    </SubCategoryContext.Provider>
  );
};

export default SubCategoryContext;