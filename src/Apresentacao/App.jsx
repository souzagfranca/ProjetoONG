//import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Apresentacao from './components/Apresentacao'
import Apresentacao2 from './components/Apresentacao2'
import Planos from './components/Planos'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <NavBar SobreNos="sim" Planos="sim" Contato="sim"/>
      <Banner/>
      <Apresentacao/>
      <Apresentacao2/>
      <Planos/>
      <Footer/>
    </div>
  )
}

export default App
