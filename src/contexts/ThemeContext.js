import React, { useContext, useState } from 'react';

const ThemeProvider = React.createContext();

export const ThemeContext = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider.Provider value={{ dark, setDark }}>
      {children}
    </ThemeProvider.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeProvider);
};
