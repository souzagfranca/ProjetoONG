import React, { useRef } from 'react';


function App() {
    const contato = useRef(null);

    const scroolSobreNos = () => {
        removeNavBar()
        sobrenos.current.scrollIntoView({ behavior: "smooth" });
    }

    const scroolPlanos = (e) => {
        removeNavBar()
        planos.current.scrollIntoView({ behavior: "smooth" });
      }
      
    return (
        <div>
            {/* FOOTER */}
            <section className='bg-cinza-escuro1 pt-5 pb-5' id='footer'>
                <div className="container text-cinza-claro" >
                    <div className="col-md-12">
                        <div className="row text-center" ref={contato}>
                            {/* REDES SOCIAIS */}
                            <div className="col-12 col-md-3 mt-5 mt-sm-0 d-flex flex-column justify-content-center align-items-center">
                                <p><i className="bi bi-whatsapp"></i> +55 (61) 3333-3333</p>
                                <p><i className="bi bi-instagram"></i> @blackboxoff</p>
                                <p><i className="bi bi-facebook"></i> BlackBox ERP</p>
                                <p><i className="bi bi-twitter"></i> @theblackbox</p>
                            </div>

                            <div className="col-12 col-md-3 mt-5 mt-sm-0 d-flex flex-column justify-content-center align-items-center">
                                <p><i className="bi bi-geo-alt-fill"></i></p>
                                <div>QI 1 Conjunto R casa 34</div>
                                <div>Guará</div>
                                <div>Brasilia - DF</div>
                            </div>

                            <div className="col-12 col-md-3 mt-5 mt-sm-0 d-flex flex-column justify-content-center align-items-center">
                                <p className='fw-bold fs-5'>Navegue por aqui</p>
                                <div><span onClick={scroolSobreNos}>Sobre nós</span></div>
                                <div><span onClick={scroolPlanos}>Planos</span></div>
                                <div><span>Entrar</span></div>
                                <div><span>Cadastro</span></div>
                            </div>

                            <div className="col-12 col-md-3 mt-5 mt-sm-0 d-flex flex-column justify-content-center align-items-center">
                                <div>Conheça nossos termos e condiçoes</div>
                                <div>Todos os direitos reservados</div>
                                <div>00.111.222/0001-77</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default App