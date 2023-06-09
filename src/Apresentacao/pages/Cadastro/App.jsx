
import React from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import FormCadastro from './components/FormCadastro';

function App() {
  return (
    <div>
      <NavBar SobreNos="sim" Planos="sim" Contato="sim"/>
      <FormCadastro />
      <Footer />
    </div>
  )

}

export default App
