import React, { useState } from 'react';
import styles from "./Login.module.css";
import logo from '../assets/logo.png';
import p1 from '../assets/o4.jpg';
import p2 from '../assets/o3.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/lobby');
  };
  const handleRegister = () => {
    navigate('/register');
  };

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.p1}>
        <img src={p1} alt="Background 1" />
      </div>

      <div className={styles.login}>
        <h2>Welcome to</h2>
        <div className={styles.logo}>
          <img onClick={handleLogoClick} src={logo} alt="Logo" />
        </div>
        <h1 className={styles.loginHead}>Login Form</h1>
        <input className={styles.email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='text' />
        <input className={styles.password} onChange={(e) => setPassword(e.target.value)}  placeholder='Password' type='password' />
        <button className={styles.button} disabled={!validateForm()} onClick={handleLogin}>Login</button>
        <p className={styles.register}>Not a Member Yet ? <span onClick={handleRegister}>Register Now</span></p>
      </div>

      <div className={styles.p2}>
        <img src={p2} alt="Background 2" />
      </div>
    </div>
  );
}

export default Login;
