import * as React from 'react';
import { createContext } from 'react';

const Context = createContext({});

const ContextProvider = ({ children }: any) => {
  return (
    <Context.Provider
      value={{}}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
