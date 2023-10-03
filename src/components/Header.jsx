import {Component} from 'react';
import '../styles.css';
import logo from '../img/School_logo.svg';

class Header extends Component {
 render(){
    return (
        <>
        <div className='Header'>
            <div><img src={logo} alt='School logo' /> </div>
            <div style={{display: 'flex', flexDirection:'column', textAlign:'center'}}> 
            <h1 className='large-heading' style={{textAlign:'justify'}}>ABUNDANT RAIN SCHOOL</h1>  
            <h4 className='sub-heading'><i>Let God arise!</i></h4>
        </div>
        </div>
        <div className='nav-menu'>
            <ul className='nav-menu-options'>
                <li><b><a href='' className='link'>Home</a></b></li>
                <li><b><a href='' className='link'>About Us</a></b></li>
                <li><b><a href='' className='link'>Admissions</a></b></li>
                <li><b><a href='' className='link'>Gallery</a></b></li>
                <li><b><a href='' className='link'>Our Teachers</a></b></li>
            </ul>
            
            
        </div>
        </>
        
    )
 }   
}

export default Header;