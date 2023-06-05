import React from 'react'
import { useContext } from 'react'

//ROTAS
import { Route, Routes, BrowserRouter } from "react-router-dom";

//PÁGINAS
import Apresentacao from './Apresentacao/App' //PÁGINA DE APRESENTACAO
import Login from './Login/App' //PÁGINA DE LOGIN
import Cadastro from './Cadastro/App' //PÁGINA DE CADASTRO
import Dashboard from './Administrador/Dashboard/App' //PAGINA DE DASHBOARD

//PAINEL ADMIN
import Estoque from './Administrador/Dashboard/pages/Estoque'
import Perfil from './Administrador/Dashboard/pages/Perfil';
import Fornecedor from './Administrador/Dashboard/pages/Fornecedor';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// CSS GLOBAL
import '/public/css/style.css'

import UserContext from './contexts/UserContext'

export default function App() {
    const { logado } = useContext(UserContext)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Apresentacao />} />
                <Route path="/cadastro" element={<Cadastro />} />

                {logado ? (
                    <Route path="/painel" element={<Dashboard />} >
                        <Route path="perfil" element={<Perfil />} />
                        <Route path="estoque" element={<Estoque />} />
                        <Route path="fornecedores" element={<Fornecedor />} />
                    </Route>
                ) : (
                    <Route path="/login" element={<Login />} />
                )}

                <Route path="*" element={<Apresentacao />} />
            </Routes>
        </BrowserRouter>
    )
}
