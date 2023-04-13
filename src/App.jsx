
import { Link } from 'react-router-dom';
import logo from '/img/logo.png'
import bannerInicial from '/img/banner.png'
import pingos from '/img/pingos.png'
import computador from '/img/computador.png'

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/css/style.css'

function App() {

  return (
    <div>
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
                <a className="nav-link active" aria-current="page" href="#">SOBRE NÓS</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" href="#">PLANOS</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" href="#">CONTATO</a>
              </li>

            </ul>
            <li className="nav-item px-3">
              <a className="btn btn-outline-info verde-claro pe-4 ps-4 w-100" href="#">ENTRAR</a>
            </li>
            <li className="nav-item px-3">
              <a className="btn verde-escuro text-white mt-sm-0 mt-3 pe-4 ps-4 w-100"
                href="#">CADASTRE-SE</a>
            </li>

          </div>
        </div>
      </nav>

      <section>
        <img src={bannerInicial} className="img-responsive w-100" alt="" />
      </section>

      <section className="bg-cinza-escuro pb-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <h1 className="text-verde-claro">+ SIMPLES</h1>
              <h1 className="text-verde-claro1">+ PRÁTICO<span className="d-none d-sm-block float-end">
                <img
                  src={pingos} alt="" /></span></h1>
              <h1 className="text-verde-escuro">+ ORGANIZADO</h1>
            </div>
            <div className="col-md-6 col-12">
              <div className="card p-3 card-esquerda">
                <p>
                  Lorem Ipsum é simplesmente um <span className="fw-bold text-verde-escuro">texto fictício</span>
                  da indústria tipográfica e de impressão. Lorem
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

      <section className='bg-cinza-claro pt-5 pb-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-start">
              <h2 className='fw-bold text-verde-escuro1'>Gestão automatizada que te ajuda a gerenciar seu negócio</h2>
              <p className='text-verde-claro1'>
                É um fato há muito estabelecido que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como seu texto de modelo padrão,              </p>
            </div>
            <div className="col-md-6">
              <img src={computador} className='img-responsive w-100' alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-cinza-escuro pt-5 pb-5'>
        <div className="col-md-12">
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
                      <button className='border border-0 bg-verde-escuro1 fs-5 pt-2 pb-2 text-white fw-bold w-75 rounded border-white mt-3 mb-3'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
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
                      <button className='border border-0 bg-verde-escuro1 fs-5 pt-2 pb-2 text-white fw-bold w-75 rounded border-white mt-3 mb-3'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
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
                      <button className='border border-0 bg-verde-escuro1 fs-5 pt-2 pb-2 text-white fw-bold w-75 rounded border-white mt-3 mb-3'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* MENSAL */}
              <div className="col-12 col-md-3">
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

    </div>
  )
}

export default App
