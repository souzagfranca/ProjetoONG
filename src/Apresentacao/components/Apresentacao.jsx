import React, { useRef } from 'react';
import pingos from '/img/pingos.png'

function App() {

    return (
        <div>
            {/* APRESENTAÇÃO 1 */}
            <section className="bg-cinza-escuro pb-5 pt-5" id='apresentacao'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h1 className="text-verde-claro">+ SIMPLES</h1>
                            <h1 className="text-verde-claro1">+ PRÁTICO<span className="d-none d-sm-block float-end">
                                <img
                                    src={pingos} alt="" /></span></h1>
                            <h1 className="text-verde-escuro mb-5">+ ORGANIZADO</h1>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card p-3 card-esquerda">
                                <div className='cantoneira'></div>
                                <p>
                                    Lorem Ipsum é simplesmente um <span className="fw-bold text-verde-escuro">texto fictício</span> da indústria tipográfica e de impressão. Lorem
                                    Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor
                                    desconhecido pegou uma galera de <span className="fw-bold text-verde-escuro">tipos e os
                                        embaralhou</span> para fazer um livro de espécimes de
                                    tipos. Ele sobreviveu não apenas a cinco séculos, mas também ao salto para a composição
                                    eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o
                                    lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, <span
                                        className="fw-bold text-verde-escuro">mais recentemente,</span> com
                                    software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default App
