import React from 'react'
import styles from '@/styles/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.NavbarLeft}>
                <button className={styles.Logo}>Gym</button><samp className={styles.LogoText}>Baran</samp>
            </div>
            <div className={styles.NavbarRight}>
                <a href="#" className={styles.NavbarLink}>HOME</a>
                <a href="#" className={styles.NavbarLink}>PROGRAM</a>
                <a href="#" className={styles.NavbarLink}>BLOG</a>
                <a href="#" className={styles.NavbarLink}>ABOUT</a>
                <button className={styles.NavbarBtn}>Log in</button>
            </div>
            <div className={styles.CollapsButton}>
                <div className={styles.CollapsBar}></div>
                <div className={styles.CollapsBar}></div>
                <div className={styles.CollapsBar}></div>                 
            </div>
        </nav>
    )
}
export default Navbar;