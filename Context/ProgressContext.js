import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const InitialValue = [
  {
    name: "Connect to Metamask",
    id: 1,
    active: true,
  },
  {
    name: "Select year",
    id: 2,
    active: true,
  },
  {
    name: "Connect to Polygon",
    id: 3,
  },
  {
    name: "Claim NFT",
    id: 4,
  },
];

const ProgressContext = createContext();

export const useProgressContext = () => useContext(ProgressContext);
const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(InitialValue);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;
