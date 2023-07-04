import React from 'react'
import Precos from './Precos'
import NavBar from '../components/NavBar'
import Footer from './Footer'


function App() {
    return (
        <>
            <NavBar SobreNos="sim" Planos="sim" Contato="sim" />
            <section className='bg-cinza-claro pt-5 pb-5' id="precos">
                <div className="col-md-12 pb-5">
                    <div className="container">
                        <div className="row">
                            <h1 className='text-verde-escuro1 f2-bold text-center mb-5'>PLANOS</h1>
                            <Precos preco="159" periodo="mensal"></Precos>
                            <Precos preco="139" periodo="trimestral"></Precos>
                            <Precos preco="119" periodo="semestral"></Precos>
                            <Precos preco="109" periodo="anual"></Precos>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default App
