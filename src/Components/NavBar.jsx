import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css'; 
import logo from '../assets/logo.png';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
      navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };
  
  return (
    <>
      <nav className="navbar">
        <div className={styles.logo}>
            <img src={logo} alt="Logo" />
        </div>
        <p className={styles.rightContent}>Not a Member Yet? <span onClick={handleRegister}>Register Now</span></p>
        <button onClick={handleLoginClick}>Login</button>
      </nav>
      <div className={styles.background}>
        {/* Background content */}
      </div>
    </>
  );
}

export default NavBar;
