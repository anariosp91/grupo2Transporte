import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import '../assets/css/styles.css'

export default function NavBar (){
    return (
        <nav className="main-navbar">
            <div className="container-nav-logo">
                <img className="nav-logo" src={logo} alt="Logo-Medellin-Travel"/>
            </div>

            <input type="checkbox" id="toggler"/>
            <label for="toggler"><i className="fa-solid fa-bars"></i></label>

            <div className="menu">
                <ul className="list">
                    <li className="li-menu-item"> <Link to='/'> <i className="fa-solid fa-house"></i> </Link> </li>
                    <li className="li-menu-item"> <Link to='/users'> Listado de Usuarios </Link> </li>
                    <li className="li-menu-item"> <Link to='/tours'> Listado de Tours </Link> </li>
                </ul>
            </div>
        </nav>
    )
}
