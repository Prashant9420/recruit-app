import React from 'react'
import styles from './signin.module.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import gicon from '../assets/google.png'
import { Link } from 'react-router-dom';
import aicon from '../assets/apple.png'

const Signin = () => {
    return (
        <div className={styles.page}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.logoInfo}>
                    <div className={styles.logo}><span style={{color:'Blue'}}>S</span><span style={{color:'yellow'}}>R</span></div>
                    <h1><span style={{color:'Blue'}}>Streamline</span><span style={{color:'yellow'}}>Recruit</span></h1>
                    <span>We Can Help You Succeed!</span>
                </div>
                <div className={styles.auth1}>
                <Button variant="outlined" sx={{width:'100%'}}><img src={gicon} alt="google_icon" width="30" height="30"/><span>Continue with Google</span></Button>
                <Button variant="outlined" sx={{width:'100%'}}><img src={aicon} alt="apple_icon"/><span>Continue with Apple</span></Button>
                </div>
                <div className={styles.divider}>
                </div>

                <div className={styles.auth2}>
                <OutlinedInput  sx={{width:"100%"}} placeholder="Email address or username"/>
                <Button variant="outlined" sx={{width:"100%"}}>Continue</Button>
                    
                </div>
                <div className={styles.remember}>
                    <input type='checkbox'/>
                    <span>Remember me for 30 days</span>
                </div>
                <div className={styles.gotosignup}>
                    <span>Don't have an account?</span>
                    <Link  to='/signup' style={{color:'#3366CC'}}>Create account</Link>
                </div>

            </div>
        </div>
    )
}

export default Signin