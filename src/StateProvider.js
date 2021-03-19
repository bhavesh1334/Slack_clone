/** @format */

import React, { createContext, useContext, useReducer } from 'react';

//Wrap our app into data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//access info from data layer , its a Custom hook
export const useStateValue = () => useContext(StateContext);
