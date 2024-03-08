import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css';
import { MyContext } from 'context/ContextProvider';


const Nav = () => {
  const {user, logout} = useContext(MyContext);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'> Home </NavLink>
        </li>
        <li>
          <NavLink to='/movies'>Movies</NavLink>
        </li>
        <li>
          {user} | <button className={styles.logout} onClick={logout}>Logout</button>

        </li>
      </ul>
    </nav>
  );
}

export default Nav
