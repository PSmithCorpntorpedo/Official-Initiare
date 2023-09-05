import { createContext, useState } from "react";

const FileContext = createContext({});

//this creates a context, or a state that can be used throughout the tree
//in this case, the file the user has submitted
export const FileProvider = ({ children }) => {
  const [file, setFile] = useState(null);

  return (
    <FileContext.Provider value={{file, setFile}}>
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;