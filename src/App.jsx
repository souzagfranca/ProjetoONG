import React from 'react'
import { useContext } from 'react'

//ROTAS
import { Route, Routes, BrowserRouter } from "react-router-dom";

//PÁGINAS
import Apresentacao from './Apresentacao/App' //PÁGINA DE APRESENTACAO
import Planos from './Apresentacao/components/Planos' //PÁGINA DE PLANOS
import Contato from './Apresentacao/components/Contato' //PÁGINA DE CONTATO
import Login from './Apresentacao/pages/Login/App' //PÁGINA DE LOGIN
import Cadastro from './Apresentacao/pages/Cadastro/App' //PÁGINA DE CADASTRO
import Dashboard from './Administrador/Dashboard/App' //PAGINA DE DASHBOARD

//PAINEL ADMIN
import Estoque from './Administrador/Dashboard/pages/Estoque'
import Perfil from './Administrador/Dashboard/pages/Perfil';
import Fornecedor from './Administrador/Dashboard/pages/Fornecedor';
import NovoProduto from './Administrador/Dashboard/pages/NovoProduto'
import NovoFornecedor from './Administrador/Dashboard/pages/NovoFornecedor'

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
                <Route path="/sobre-nos" element={<Apresentacao />} />
                <Route path="/planos" element={<Planos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cadastro/:planos" element={<Cadastro />} />

                {logado ? (
                    <Route path="/painel" element={<Dashboard />} >
                        <Route index element={<Perfil />} />
                        <Route path="estoque" element={<Estoque />} />
                        <Route path="perfil" element={<Perfil />} />
                        <Route path="fornecedores" element={<Fornecedor />} />
                        <Route path="estoque/novoProduto" element={<NovoProduto/>} />
                        <Route path="fornecedores/novoFornecedor" element={<NovoFornecedor/>} />
                    </Route>
                ) : (
                    <Route path="/login" element={<Login />} />
                )}

                <Route path="*" element={<Apresentacao />} />
            </Routes>
        </BrowserRouter>
    )
}
