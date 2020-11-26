import React, { useState } from 'react';

export const FilterContext = React.createContext();

export default function FilterProvider(props) {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const state = {
    isDisplayed,
    setIsDisplayed,
  };
  return (
    <FilterContext.Provider value={state}>
      {props.children}
    </FilterContext.Provider>
  )
}