import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css'; 
import logo from '../assets/logo.png';
import background from '../assets/bg.jpg'
const NavBar = () => {
  const navigate = useNavigate();

  const handleLoginClick = ()=> {
      navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };
  
  return (
    <>
    <nav className="navbar">
        <div className={styles.logo}>
            <img src={logo} alt="" />
      </div>
        <p className={styles.rightContent}>Not a Member Yet ? <span onClick={handleRegister}> Register Now</span></p>
        <button onClick={handleLoginClick}>login</button>
    </nav>
    <div style={{ backgroundImage: `url(${background})`, height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>

    </div>
    </> 
  )
}

export default NavBar
