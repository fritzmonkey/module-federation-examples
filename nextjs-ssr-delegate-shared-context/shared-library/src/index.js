import React from 'react';

export const NameContext = React.createContext('No name provided');

export const NameProvider = ({ children, value }) => {
  return React.createElement(NameContext.Provider, { value }, children);
};
