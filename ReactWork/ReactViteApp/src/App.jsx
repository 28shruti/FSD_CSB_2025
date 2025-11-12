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
import Registration from './pages/Registration.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MainLayout from './pages/MainLayout.jsx';



function App() {
  const[data,setData]=useState();


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
            <Route path="/" element={<MainLayout />} />
            <Route path='/login' element={<Login logData={data}/>}></Route>
            <Route path='/register' element={<Registration regData={setData}/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/mainlayout' element={<MainLayout/>}></Route>
          </Routes>
            </BrowserRouter>
            <h2>
              {JSON.stringify(data)}
            </h2>
          
      </div>
      
    </>
  )
}

export default App
