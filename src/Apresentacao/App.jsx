//import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Apresentacao from './components/Apresentacao'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <NavBar SobreNos="sim" Planos="sim" Contato="sim"/>
      <Banner/>
      <Apresentacao/>
      <Footer/>
    </>
  )
}

export default App
