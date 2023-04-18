//import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Apresentacao from './components/Apresentacao'
import Apresentacao2 from './components/Apresentacao2'
import Planos from './components/Planos'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Apresentacao></Apresentacao>
      <Apresentacao2></Apresentacao2>
      <Planos></Planos>
      <Footer></Footer>
    </div>
  )
}

export default App
