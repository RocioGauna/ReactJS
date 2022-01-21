import { Link } from 'react-router-dom'
import React from 'react'
import Icon from './Icon'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar-container'>
            <ul className='navbar-list'>
                <Link to = '/'><li className='navbar-li'>Home</li></Link>
                <Link to = '/category/Champions'><li className='navbar-li'>Champions</li></Link>
                <Link to = '/category/Skins'><li className='navbar-li'>Skins</li></Link>
                <Link to = '/category/cart'>
                    <Icon />
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar


