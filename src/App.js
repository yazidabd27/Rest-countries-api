import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import CountryDetails from "./CountryDetails";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

function App() {
  const[blackTheme, setTheme]=useState(false)

  return(
    <Router>
      <div className={`drop-shadow-md fixed w-full ${blackTheme ? 'bg-DarkBlue text-white' : 'bg-white text-black'} z-50`}>
        <nav className="navbar flex justify-between px-4 md:px-8 py-5 md:mx-8">
          <h3 className='font-extrabold text-lg'>Where in the world?</h3>
          <div className="theme-toggle flex cursor-pointer" onClick={()=>setTheme(!blackTheme)}>
            <span className="icon inline-block mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${blackTheme ? 'hidden' : 'block'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 text-white ${blackTheme ? 'block' : 'hidden'}`}>
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Dark Mode</span>
          </div>
        </nav>
      </div> 
      <main className={`home ${blackTheme ? 'bg-vdb text-white' : 'bg-vlg text-black'} min-h-screen`}>
        <ThemeContext.Provider value={blackTheme}>
          <Routes>  
            <Route exact path="/" element={<Home />}/>
            <Route path=":code" element={<CountryDetails />}/>
          </Routes>
        </ThemeContext.Provider>
      </main>
    </Router>
  )

}

export default App;
