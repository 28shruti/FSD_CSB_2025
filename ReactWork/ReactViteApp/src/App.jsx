import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile.jsx';
import Gallery from './component/Gallery.jsx';
import StateHandling from './component/StateHandling.jsx';
function App() {

  return (
    <>
      <div className='container'>
        {/* <h2>Welcome to React Vite</h2> */}
        {/* <h1>Student Profiles</h1> */}
          {/* <Gallery /> */}
          <h2>State Handling Example</h2>

          <StateHandling />
      </div>
      
    </>
  )
}

export default App
