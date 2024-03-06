import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css';


const Nav = () => {
  return (
            <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to='/'> Home </NavLink>
            </li>
            <li>
              <NavLink to='/movies'>Movies</NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default Nav