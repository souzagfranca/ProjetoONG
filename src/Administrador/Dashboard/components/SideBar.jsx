import logo from '../../../../public/img/logo.png'
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function SideBar() {
    return (
        <div className="sidebar" ref={sidebarRef}>
            <div className="logo-area d-flex m-auto">
                <Link to="/painel">
                    <img src={logo} className="m-auto img-responsive" alt="Logo blackbox" />
                </Link>
            </div>
            <ul>
                <Link to="/painel">
                    <li className="my-2 text-center">
                        <i className="bi bi-person fw-bold me-2"></i>
                        PERFIL
                    </li>
                </Link>
                <Link to="/painel">
                    <li className="my-2 text-center active">
                        <i className="bi bi-box fw-bold me-2"></i>
                        ESTOQUE
                    </li>
                </Link>
                <Link to="/painel">
                    <li className="my-2 text-center">
                        <i className="bi bi-calendar-event fw-bold me-2"></i>
                        FORNECEDORES
                    </li>
                </Link>
            </ul>
        </div>
    );
}