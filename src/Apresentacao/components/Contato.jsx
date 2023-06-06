import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Footer from './Footer'
import mapaContato from '../assets/img/mapa_contato.png'


function App() {
    return (
        <>
            <NavBar SobreNos="sim" Planos="sim" Contato="sim" />
            <section className='bg-cinza-claro py-4 pb-5' id="contato">
                <div className="container my-5">
                    <h1 className='text-verde-escuro1 f2-bold text-center mb-5'>CONTATO</h1>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card bg-cinza-escuro p-4 border-0 m-auto">
                                <img src={mapaContato} alt="" />
                                <p className='mt-4'><i className="bi bi-geo-alt-fill text-red me-2"></i>QI 4, Conjunto R, Casa 34, Guará-II, Brasília- DF</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 fs-4 text-center text-verde-claro mt-5">
                            <div className='d-block d-sm-flex justify-content-center'>
                                <div className="col-12 col-md-6 mt-3">
                                    <li className='fw-bold'>
                                        Telefone
                                    </li>
                                    <p>(61) 9 9999-9999</p>
                                </div>
                                <div className="col-12 col-md-6 mt-3 mb-4">
                                    <li className='fw-bold'>E-mail</li>
                                    <p>contato@blackbox.com.br</p>
                                </div>
                            </div>
                            <div className="col-112 m-autotext-center">
                                <li className='fw-bold mt-5 mb-3'>Redes sociais</li>
                                <div className="d-flex m-auto fs-4">
                                    <div className="col-6 border-end py-4">
                                        <i className="bi bi-whatsapp"></i>
                                        <p>(61) 99999-9999</p>
                                    </div>
                                    <div className="col-6 py-4">
                                        <i className="bi bi-instagram"></i>
                                        <p>@blackbox</p>
                                    </div>
                                </div>

                                <div className="d-flex m-autofs-3 border-top">
                                    <div className="col-6 border-end py-4">
                                        <i className="bi bi-facebook"></i>
                                        <p>BlackBox-ERP</p>
                                    </div>
                                    <div className="col-6 py-4">
                                        <i className="bi bi-twitter"></i>
                                        <p>@blackbox</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default App
