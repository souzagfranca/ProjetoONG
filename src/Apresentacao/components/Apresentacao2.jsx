import React from 'react';
import computador from '/img/computador.png'

function App() {
    return (
        <div>
            {/* APRESENTAÇÃO 2 */}
            <section className='bg-cinza-claro pt-5 pb-5' id="apresentacao">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-start">
                            <h2 className='fw-bold text-verde-escuro1'>Gestão automatizada que te ajuda a gerenciar seu negócio</h2>
                            <p className='text-verde-escuro1'>
                                É um fato há muito estabelecido que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como seu texto de modelo padrão,              </p>
                        </div>
                        <div className="col-md-6">
                            <img src={computador} className='img-responsive w-100' alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default App
