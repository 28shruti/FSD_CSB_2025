import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile.jsx';
import Gallery from './component/Gallery.jsx';
import StateHandling from './component/StateHandling.jsx';
import ImageManipulation from './component/ImageManipulation.jsx';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './pages/Login.jsx';
function App() {

  return (
    <>
      <div >
        {/* <h2>Welcome to React Vite</h2> */}
        {/* <h1>Student Profiles</h1> */}
          {/* <Gallery /> */}
          {/* <h2>State Handling </h2> */}

          {/* <StateHandling /> */}

          {/* <ImageManipulation /> */}

          <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            </Routes>
            </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
