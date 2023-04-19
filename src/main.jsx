import React from 'react'
import ReactDOM from 'react-dom/client'

//ROTAS
import { Route, Routes, BrowserRouter } from "react-router-dom";

//PÁGINAS
import Apresentacao from './Apresentacao/App' //PÁGINA DE APRESENTACAO
import Login from './Login/App' //PÁGINA DE LOGIN
import Cadastro from './Cadastro/App' //PÁGINA DE CADASTRO

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// CSS GLOBAL
import '/public/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
