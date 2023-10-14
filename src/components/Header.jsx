import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/img/School_logo.svg';

const Header = () => {

    return (
        <>
            <nav className='Header'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img src={logo} alt='School logo' style={{ width: 46, height: 53 }} />
                    <h1 className='logo-large-heading' style={{ textAlign: 'justify' }}>ABUNDANT RAIN SCHOOL</h1>
                </div>
                <ul className='nav-bar-options'>
                    <li><Link to="/" className={'link'}>Home</Link></li>
                    <li><Link to="/AboutUs" className={'link'}>About Us</Link></li>
                    <li><Link to="/" className={'link'}>Admissions</Link></li>
                    <li><Link to="/" className={'link'}>Gallery</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
