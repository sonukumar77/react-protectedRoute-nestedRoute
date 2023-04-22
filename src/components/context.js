import { createContext, useState } from "react";

export const myContext = createContext();

const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <myContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </myContext.Provider>
  );
};

export default ContextProvider;
