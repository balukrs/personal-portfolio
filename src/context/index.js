import React, { createContext, useReducer } from "react";
import { hoverReducer } from "../reducer";

const initial = { hoverloc: null, triggervalue: false };

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(hoverReducer, initial);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initial);
export default Store;
