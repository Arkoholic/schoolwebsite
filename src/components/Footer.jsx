import './Footer.css';
import logo from '../assets/img/School_logo.svg';

export default function Footer() {
    return (
        <div className='footerContainer'>
        <div className='logoAndTitle'>
        <img src={logo} alt='logo'style={{ width: 30, height: 34.5 }} />
        <span className='schooltitle'>ABUNDANT RAIN SCHOOL</span>
        </div>
        </div>
    );
}