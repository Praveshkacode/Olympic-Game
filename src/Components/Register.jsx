import React from 'react';
import styles from "./Register.module.css";
import logo from '../assets/logo.png';
import p1 from '../assets/o4.jpg';
import p2 from '../assets/o3.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.p1}>
        <img src={p1} alt="Background 1" />
      </div>

      <div className={styles.register}>
        <h2>Welcome to</h2>
        <div className={styles.logo}>
          <img onClick={handleLogoClick} src={logo} alt="Logo" />
        </div>
        <h1 className={styles.registerHead}>Registration Form</h1>
        <input className={styles.username} placeholder='Username/Email' type='text' />
        <input className={styles.password} placeholder='Password' type='password' />
        <input className={styles.password} placeholder='Confirm Password' type='password' />
        <button className={styles.button} onClick={handleRegister}>Register</button>
      </div>

      <div className={styles.p2}>
        <img src={p2} alt="Background 2" />
      </div>
    </div>
  );
}

export default Register;
