import React from 'react'
import styles from './header.module.css'
import { useNavigate } from 'react-router'
const Header = () => {
    const navigate=useNavigate();
  return (
    
        <header className={styles.Appheader}>
        <h1 className={styles.Logo} onClick={()=>navigate('/')}><span style={{color:'white'}}>Streamline</span><span style={{color:'yellow'}}>Recruit</span></h1>
        <div style={{display:'flex',flexDirection:'column'}}>
        <h1>Welcome to StreamlineRecruit!</h1>
        <h2>Efficient Online Recruitment Solution for Hiring Managers and HR Professionals</h2>
        </div>
        <div className={styles.ButtonGroup}>
          <button className={styles.SignInButton} onClick={()=>navigate("/signin")}>Sign In</button>
          <button className={styles.SignUpButton} onClick={()=>navigate("/signup")}>Sign Up</button>
        </div>
      </header>
  )
}

export default Header