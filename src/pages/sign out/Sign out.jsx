import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signout() {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload();

  };

  return (
    <div>
      <h2>Signout</h2>
      <button onClick={handleSignout}>Вийти</button>
    </div>
  );
}

export default Signout;
