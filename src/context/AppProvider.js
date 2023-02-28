import React, { useState, createContext } from 'react';

const Context = createContext();

const AppProvider = ({children}) => {

  const [currentAccount, setCurrentAccount] = useState("");

  return (
    <Context.Provider 
      value={[
        currentAccount, setCurrentAccount,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };