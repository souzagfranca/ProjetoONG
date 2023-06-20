import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = () => {
      navigate('/login');
    };
    handleLogout();

  }, []);

  return (
    <>
    </>
  );
}
