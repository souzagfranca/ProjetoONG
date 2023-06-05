import React, { useState, useRef, useEffect } from 'react';
import logo from '../../../../public/img/logo.png';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const sidebarRef = useRef(null);
  const btnSidebarRef = useRef(null);
  const openSideBarRef = useRef(null);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    function handleClickOutside(event) {
      if (isActive && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsActive(false);
        btnSidebarRef.current.classList.remove('me-250');
        openSideBarRef.current.classList.remove('active');
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isActive]);

  function handleToggle() {
    setIsActive(!isActive);
    if (!isActive) {
      btnSidebarRef.current.classList.add('me-250');
      openSideBarRef.current.classList.add('active');
    } else {
      btnSidebarRef.current.classList.remove('me-250');
      openSideBarRef.current.classList.remove('active');
    }
  }

  function handleItemClick(item) {
    setActiveItem(item);
  }

  return (
    <>
      <div className={`sidebar ${isActive ? 'active' : ''}`} ref={openSideBarRef}>
        <div className="logo-area d-flex m-auto">
          <Link to="/painel">
            <img src={logo} className="m-auto img-responsive" alt="Logo blackbox" />
          </Link>
        </div>
        <div className='pe-1 ps-1'>
          <Link to="/painel/perfil" onClick={() => handleItemClick('perfil')}>
            <li className={`pt-2 pb-2 my-2 text-center ${activeItem === 'perfil' ? 'active' : ''}`}>
              <i className="bi bi-person fw-bold me-2"></i>
              PERFIL
            </li>
          </Link>
          <Link to="/painel/estoque" onClick={() => handleItemClick('estoque')}>
            <li className={`pt-2 pb-2 my-2 text-center ${activeItem === 'estoque' ? 'active' : ''}`}>
              <i className="bi bi-box fw-bold me-2"></i>
              ESTOQUE
            </li>
          </Link>
          <Link to="/painel/fornecedores" onClick={() => handleItemClick('fornecedores')}>
            <li className={`pt-2 pb-2 my-2 text-center ${activeItem === 'fornecedores' ? 'active' : ''}`}>
              <i className="bi bi-calendar-event fw-bold me-2"></i>
              FORNECEDORES
            </li>
          </Link>
        </div>
      </div>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <button id="btn-sidebar" ref={btnSidebarRef} onClick={handleToggle} className="btn d-lg-none">
            <i id="sidebar-toggle" className="bi bi-list"></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
