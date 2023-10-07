'use client'
import { createContext, useState } from 'react';

const TabContext = createContext();

const TabContextProvider = ({ children }) => {
  const [tab, setTab] = useState('feed');

  const updateTab = (newTab) => {
    console.log('newTab', newTab);
    setTab(newTab);
  };

  return (
    <TabContext.Provider value={{ tab, updateTab }}>
      {children}
    </TabContext.Provider>
  );
};

export { TabContext, TabContextProvider };
