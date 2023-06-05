import React, { useRef } from 'react';
import SideBar from './components/Sidebar';
import NavBar from './components/Navbar';
import './assets/css/App.css'
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Outlet/>
    </>
  )

}

export default App
