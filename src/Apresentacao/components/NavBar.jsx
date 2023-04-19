
import { Link } from 'react-router-dom';
import logo from '/img/logo.png'
import React from 'react';


function App(props) {
  const removeNavBar = () => {
    const nav = document.querySelector('.navbar-collapse');
    nav.classList.remove('show');
  }
  const scroolPlanos = () => {
    const mainRoot = document.getElementById("precos");
    mainRoot.scrollIntoView({ behavior: "smooth" });
    removeNavBar()
  }

  const scroolSobreNos = () => {
    const mainRoot = document.getElementById("apresentacao");
    mainRoot.scrollIntoView({ behavior: "smooth" });
    removeNavBar()
  }

  const scroolContatos = () => {
    const mainRoot = document.getElementById("footer");
    mainRoot.scrollIntoView({ behavior: "smooth" });
    removeNavBar()
  }

  return (
    <div>

      {/* NAVBAR */}
      <section>
        <nav className="bg-cinza-escuro navbar navbar-expand-lg bg-body-tertiary">
          <div className="container pt-3 pb-3">
            <Link to="/">
              <img src={logo} className="img-responsive" alt="" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {props.SobreNos ? <li className="nav-item px-4">
                  <small className="nav-link active" onClick={scroolSobreNos} aria-current="page">SOBRE NÓS</small>
                </li> : ''}

                {props.Planos ? <li className="nav-item px-4">
                  <small className="nav-link" onClick={scroolPlanos}>PLANOS</small>
                  </li> : ''}

                {props.Contato ? <li className="nav-item px-4">
                  <small className="nav-link" onClick={scroolContatos}>CONTATO</small>
                  </li> : ''}

              </ul>
              <li className="nav-item px-3">
                <Link to="/login">
                  <small className="btn btn-outline-info verde-claro pe-4 ps-4 w-100">
                    ENTRAR
                  </small>
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/cadastro">
                  <small className="btn verde-escuro text-white mt-sm-0 mt-3 pe-4 ps-4 w-100"
                    href="#">CADASTRE-SE</small>
                </Link>
              </li>

            </div>
          </div>
        </nav>
      </section>

    </div>
  )
}

export default App
