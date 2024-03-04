import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav'
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <header className={styles.header}>
                <Nav />
                <div className={styles.text}>React route</div>

            </header>
            <Outlet />
        </div>
    );
}

export default Layout