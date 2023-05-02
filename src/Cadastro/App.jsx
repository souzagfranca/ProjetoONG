
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import NavBar from '../Apresentacao/components/NavBar'
import Footer from '../Apresentacao/components/Footer'
import FormCadastro from './components/FormCadastro';

function App() {
  return (
    <div>
      <NavBar />
      <FormCadastro />
      <Footer />
    </div>
  )

}

export default App
