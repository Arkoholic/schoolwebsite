import {Component} from 'react';
import '../Header.css';
import logo from '../assets/img/School_logo.svg';

class Header extends Component {
 render(){
    return (
        <>
        <div className='Header'>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src={logo} alt='School logo' style={{ width: 46, height: 53 }} />
        <h1 className='logo-large-heading' style={{ textAlign: 'justify' }}>ABUNDANT RAIN SCHOOL</h1>
    </div>
    <ul className='nav-bar-options'>
        <li><a href='' className='link'>Home</a></li>
        <li><a href='' className='link'>About Us</a></li>
        <li><a href='' className='link'>Admissions</a></li>
        <li><a href='' className='link'>Gallery</a></li>
    </ul>
</div>

        
        
        
        </>
        
    )
 }   
}

export default Header;