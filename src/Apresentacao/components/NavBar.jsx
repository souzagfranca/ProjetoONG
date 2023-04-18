
import { Link } from 'react-router-dom';
import logo from '/img/logo.png'
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
      
    </div>
  )
}

export default App
