import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';

export default function App() {
  const navigate = useNavigate()
  const { handleLogout } = useContext(UserContext)

  useEffect(() => {
    handleLogout();
    navigate('/login')
  }, []);

  return (
    <>
    </>
  );
}
