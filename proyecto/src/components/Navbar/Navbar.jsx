import React from 'react'
import Icon from './Icon'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar-container'>
            <a href="index.html"><h2 className='navbar-logo'>Logo</h2></a>
            <ul className='navbar-list'>
                <li className='navbar-li'>Personajes</li>
                <li className='navbar-li'>Skins</li>
                <li className='navbar-li'>Contacto</li>
                <Icon />
            </ul>
        </nav>
    )
}

export default Navbar


