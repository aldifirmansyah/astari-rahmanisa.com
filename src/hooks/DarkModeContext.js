import React from 'react'

const DarkModeContext = React.createContext({
  IsDarkMode: false,
  SetIsDarkMode: () => {}
});

export default DarkModeContext;