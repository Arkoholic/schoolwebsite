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
        
        </>
        
    )
 }   
}

export default Header;