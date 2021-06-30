import React, { useState } from 'react';

import { minutes } from '../function/calcTimes';

export const StateContext = React.createContext(null);

const ContextProvider = ({ children }) => {
  const initialState = {
    speed: 2,
    rangeValue: 100.0,
    durationTime: 10 * minutes,
    durationRealTime: 5 * minutes,
    currentTime: 10 * minutes,
    currentRealTime: 5 * minutes,
    savedTime: 5 * minutes,
  };

  const [state, setState] = useState(initialState);

  const value = {
    state,
    setState,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default ContextProvider;
