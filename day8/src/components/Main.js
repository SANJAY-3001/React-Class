import React, { createContext,useState } from 'react'
// import React, {useState} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

export const ThemeContext=createContext({})
export default function Main() {
const [theme, setTheme] = useState({
    bgColor: "black",
    textColor: "white",
  });

  function onClick() {
    theme.bgColor === "black"
      ? setTheme({
          textColor: "black",
          bgColor: "white",
        })
      : setTheme({ textColor: "white", bgColor: "black" });
  }

  const values = {
    theme,
    onClick,
  };
  return (
    <div>
    <ThemeContext.Provider value={values}>
      <Navbar></Navbar>
      <Home></Home>
      <Footer theme={theme}></Footer>
      </ThemeContext.Provider>
    </div>
  )
}
