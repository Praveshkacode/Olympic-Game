import React, { useState } from 'react';
import styles from "./Register.module.css";
import logo from '../assets/logo.png';
import p1 from '../assets/o4.jpg';
import p2 from '../assets/o3.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const[name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleRegister = () => {

    navigate('/login');
  };

  function validateForm() {

    return email.length > 0 && password.length > 0 && name.length >0;

  }

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
        <input className={styles.username} onChange={(e) => setName(e.target.value)} placeholder='Name' type='text' />
        <input className={styles.email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='text' />
        <input className={styles.password} onChange={(e) => setPassword(e.target.value)}placeholder='Password' type='password' />
        <button className={styles.button} disabled={!validateForm()} onClick={handleRegister}>Register</button>
      </div>

      <div className={styles.p2}>
        <img src={p2} alt="Background 2" />
      </div>
    </div>
  );
}

export default Register;
