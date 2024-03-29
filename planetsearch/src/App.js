import React, { useState } from 'react'
import { Routes } from './components/Routes';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App = () => {
  const [darkTheme, setdarkTheme] = useState(false);

  return (
    <div className={darkTheme? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setdarkTheme={setdarkTheme}/>
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App