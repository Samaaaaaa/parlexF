import { createContext, useState, useContext } from "react";

const AttorneyContext = createContext();

export const AttorneyProvider = ({ children }) => {
  const [attorneyData, setAttorneyData] = useState(null);

  return (
    <AttorneyContext.Provider value={{ attorneyData, setAttorneyData }}>
      {children}
    </AttorneyContext.Provider>
  );
};

export const useAttorney = () => useContext(AttorneyContext);
