import React from 'react'
import { useContext } from 'react'

//ROTAS
import { Route, Routes, BrowserRouter } from "react-router-dom";

//PÁGINAS
import Apresentacao from './Apresentacao/App' //PÁGINA DE APRESENTACAO
import Planos from './Apresentacao/components/Planos' //PÁGINA DE PLANOS
import Contato from './Apresentacao/components/Contato' //PÁGINA DE CONTATO
import Login from './Apresentacao/pages/Login/App' //PÁGINA DE LOGIN
import Logout from './Apresentacao/pages/Logout/App' //PÁGINA DE LOGIN
import Cadastro from './Apresentacao/pages/Cadastro/App' //PÁGINA DE CADASTRO
import Dashboard from './Administrador/Dashboard/App' //PAGINA DE DASHBOARD

//PAINEL ADMIN
import Estoque from './Administrador/Dashboard/pages/Estoque'
import Perfil from './Administrador/Dashboard/pages/Perfil';
import Fornecedor from './Administrador/Dashboard/pages/Fornecedor';
import NovoProduto from './Administrador/Dashboard/pages/NovoProduto'
import NovoFornecedor from './Administrador/Dashboard/pages/NovoFornecedor'
import EditarProduto from './Administrador/Dashboard/pages/EditarProduto';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// CSS GLOBAL
import '/public/css/style.css'

import UserContext from './contexts/UserContext'
import EditarFornecedor from './Administrador/Dashboard/pages/EditarFornecedor';
import EditarUsuario from './Administrador/Dashboard/pages/EditarUsuario';

export default function App() {
    const { logado } = useContext(UserContext)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sobre-nos" element={<Apresentacao />} />
                <Route path="/planos" element={<Planos />} />
                <Route path="/contato" element={<Contato />} />

                {!logado ? (
                    <Route path="/cadastro/:planos" element={<Cadastro />} />
                ) : null}


                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />

                <Route path="/painel" element={<Dashboard />} >
                    <Route index element={<Perfil />} />
                    <Route path="estoque" element={<Estoque />} />
                    <Route path="perfil" element={<Perfil />} />
                    <Route path="fornecedores" element={<Fornecedor />} />
                    <Route path="estoque/novoProduto" element={<NovoProduto />} />
                    <Route path="fornecedores/novoFornecedor" element={<NovoFornecedor />} />
                    <Route path="estoque/editar/:key" element={<EditarProduto />} />
                    <Route path="fornecedores/editarFornecedor/:key" element={<EditarFornecedor />} />
                    <Route path="editarUsuario/:key" element={<EditarUsuario />} />
                </Route>

                <Route path="*" element={<Apresentacao />} />
            </Routes>
        </BrowserRouter>
    )
}
