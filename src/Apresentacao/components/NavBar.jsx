import { Link } from 'react-router-dom';
import logo from '/img/logo.png'
import React from 'react';
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'


function App(props) {
  const removeNavBar = () => {
    const nav = document.querySelector('.navbar-collapse');
    nav.classList.remove('show');
  }

  var { logado } = useContext(UserContext)
  return (
    <div>

      {/* NAVBAR */}
      <section>
        <nav className="bg-cinza-escuro navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
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

                <Link to="/sobre-nos">
                  <li className="nav-item px-4">
                    <small className="nav-link" aria-current="page">SOBRE NÓS</small>
                  </li>
                </Link>

                <Link to="/planos">
                  <li className="nav-item px-4">
                    <small className="nav-link">PLANOS</small>
                  </li>
                </Link>

                <Link to="/contato">
                  <li className="nav-item px-4">
                    <small className="nav-link">CONTATO</small>
                  </li>
                </Link>

              </ul>
              {logado ? (
                <li className="nav-item px-3">
                  <Link to="/painel">
                    <small className="btn verde-escuro text-white mt-sm-0 mt-3 pe-4 ps-4 w-100"
                      href="#">Acessar Painel</small>
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item px-3">
                    <Link to="/login">
                      <small className="btn btn-outline-info verde-claro pe-4 ps-4 w-100">
                        ENTRAR
                      </small>
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link to="/cadastro/mensal">
                      <small className="btn verde-escuro text-white mt-sm-0 mt-3 pe-4 ps-4 w-100"
                      >CADASTRE-SE</small>
                    </Link>
                  </li>
                </>
              )
              }

            </div>
          </div>
        </nav>
      </section>

    </div>
  )
}

export default App
