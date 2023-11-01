import React, { useState } from "react";
import StateContext from "./StateContext";

const StateContextProvider = ({ children }) => {
  const [groupingValue, setGroupingValue] = useState("status");
  const [defaultValue, setDefaultValue] = useState("");

  return (
    <StateContext.Provider
      value={{ groupingValue, setGroupingValue, defaultValue, setDefaultValue }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
