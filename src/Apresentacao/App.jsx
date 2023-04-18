
import { Link } from 'react-router-dom';
import logo from '/img/logo.png'
import bannerInicial from '/img/banner.png'
import pingos from '/img/pingos.png'
import computador from '/img/computador.png'
import React, { useRef } from 'react';


function App() {
  const removeNavBar = () => {
    const nav = document.querySelector('.navbar-collapse');
    nav.classList.remove('show');

  }

  const sobrenos = useRef(null);
  const planos = useRef(null);
  const contato = useRef(null);

  const scroolPlanos = (e) => {
    removeNavBar()
    planos.current.scrollIntoView({ behavior: "smooth" });
  }

  const scroolSobreNos = () => {
    removeNavBar()
    sobrenos.current.scrollIntoView({ behavior: "smooth" });
  }

  const scroolContatos = () => {
    removeNavBar()
    contato.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>

      {/* NAVBAR */}
      <section>
        <nav className="bg-cinza-escuro navbar navbar-expand-lg bg-body-tertiary">
          <div className="container pt-3 pb-3">
            <img src={logo} className="img-responsive" alt="" />

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item px-4">
                  <small className="nav-link active" onClick={scroolSobreNos} aria-current="page" href="#">SOBRE NÓS</small>
                </li>
                <li className="nav-item px-4">
                  <small className="nav-link" onClick={scroolPlanos} href="#">PLANOS</small>
                </li>
                <li className="nav-item px-4">
                  <small className="nav-link" onClick={scroolContatos} href="#">CONTATO</small>
                </li>

              </ul>
              <li className="nav-item px-3">
                <small className="btn btn-outline-info verde-claro pe-4 ps-4 w-100" href="#">ENTRAR</small>
              </li>
              <li className="nav-item px-3">
                <small className="btn verde-escuro text-white mt-sm-0 mt-3 pe-4 ps-4 w-100"
                  href="#">CADASTRE-SE</small>
              </li>

            </div>
          </div>
        </nav>
      </section>

      {/* BANNER INICIAL */}
      <section id="banner-inicial">
        <img src={bannerInicial} className="img-responsive w-100" alt="" />
      </section>

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

      {/* APRESENTAÇÃO 2 */}
      <section className='bg-cinza-claro pt-5 pb-5'>
        <div className="container" ref={sobrenos}>
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

      {/* PLANOS E PREÇOS */}
      <section className='bg-cinza-escuro pt-5 pb-5' id="precos" ref={planos}>
        <div className="col-md-12 pb-5">
          <div className="container">
            <div className="row">
              <h1 className='text-verde-escuro1 f2-bold text-center mb-5'>PLANOS</h1>

              {/* MENSAL */}
              <div className="col-12 col-md-3">
                <div className="card mt-5 mt-sm-0">
                  <div className='bg-verde-escuro text-center text-white rounded'>
                    <p className='fs-3 pt-2 pb-2'>mensal</p>
                  </div>
                  <div className='text-center p-3'>
                    <small className='text-center text-verde-escuro mt-3 mb-3'>R$<small className='fw-bold fs-4'>159</small></small>
                    <div className='text-center fs-6'>
                      <p className='text-start'><i className="bi bi-basket3 text-verde-escuro fs-4"></i> Controle de vendas;</p>
                      <p className='text-start'><i className="bi bi-boxes text-verde-escuro fs-4"></i> Gerenciamento de estoque e mercadoria;</p>
                      <p className='text-start'><i className="bi bi-calendar-check text-verde-escuro fs-4"></i> Gestão de metas e prazos;</p>
                      <p className='text-start'><i className="bi bi-cash-coin text-verde-escuro fs-4"></i> Relátorios de lucros e custos;</p>
                      <button className='border border-0 bg-verde-escuro1 fs-5 pt-2 pb-2 text-white w-75 rounded border-white mt-3 mb-3'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* MENSAL */}
              <div className="col-12 col-md-3">
                <div className="card mt-5 mt-sm-0">
                  <div className='bg-verde-escuro text-center text-white rounded'>
                    <p className='fs-3 pt-2 pb-2'>trimestral</p>
                  </div>
                  <div className='text-center p-3'>
                    <small className='text-center text-verde-escuro mt-3 mb-3'>R$<small className='fw-bold fs-4'>139</small></small>
                    <div className='text-center fs-6'>
                      <p className='text-start'><i className="bi bi-basket3 text-verde-escuro fs-4"></i> Controle de vendas;</p>
                      <p className='text-start'><i className="bi bi-boxes text-verde-escuro fs-4"></i> Gerenciamento de estoque e mercadoria;</p>
                      <p className='text-start'><i className="bi bi-calendar-check text-verde-escuro fs-4"></i> Gestão de metas e prazos;</p>
                      <p className='text-start'><i className="bi bi-cash-coin text-verde-escuro fs-4"></i> Relátorios de lucros e custos;</p>
                      <button className='border border-0 bg-verde-escuro1 fs-5 pt-2 pb-2 text-white w-75 rounded border-white mt-3 mb-3'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* MENSAL */}
              <div className="col-12 col-md-3">
                <div className="card mt-5 mt-sm-0">
                  <div className='bg-verde-escuro text-center text-white rounded'>
                    <p className='fs-3 pt-2 pb-2'>semestral</p>
                  </div>
                  <div className='text-center p-3'>
                    <small className='text-center text-verde-escuro mt-3 mb-3'>R$<small className='fw-bold fs-4'>119</small></small>
                    <div className='text-center fs-6'>
                      <p className='text-start'><i className="bi bi-basket3 text-verde-escuro fs-4"></i> Controle de vendas;</p>
                      <p className='text-start'><i className="bi bi-boxes text-verde-escuro fs-4"></i> Gerenciamento de estoque e mercadoria;</p>
                      <p className='text-start'><i className="bi bi-calendar-check text-verde-escuro fs-4"></i> Gestão de metas e prazos;</p>
                      <p className='text-start'><i className="bi bi-cash-coin text-verde-escuro fs-4"></i> Relátorios de lucros e custos;</p>
                      <button className='border border-0 bg-verde-escuro1 fs-5 pt-2 pb-2 text-white w-75 rounded border-white mt-3 mb-3'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* MENSAL */}
              <div className="col-12 col-md-3" id="mensal3">
                <div className="card mt-5 mt-sm-0">
                  <div className='bg-verde-escuro text-center text-white rounded'>
                    <p className='fs-3 pt-2 pb-2'>anual</p>
                  </div>
                  <div className='text-center p-3'>
                    <small className='text-center text-verde-escuro mt-3 mb-3'>R$<small className='fw-bold fs-4'>109</small></small>
                    <div className='text-center fs-6'>
                      <p className='text-start'><i className="bi bi-basket3 text-verde-escuro fs-4"></i> Controle de vendas;</p>
                      <p className='text-start'><i className="bi bi-boxes text-verde-escuro fs-4"></i> Gerenciamento de estoque e mercadoria;</p>
                      <p className='text-start'><i className="bi bi-calendar-check text-verde-escuro fs-4"></i> Gestão de metas e prazos;</p>
                      <p className='text-start'><i className="bi bi-cash-coin text-verde-escuro fs-4"></i> Relátorios de lucros e custos;</p>
                      <button className='border border-0 bg-verde-escuro1 fs-5 pt-2 pb-2 text-white fw-bold w-75 rounded border-white mt-3 mb-3'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
