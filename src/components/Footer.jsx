import './Footer.css';
import logo from '../assets/img/School_logo.svg';

export default function Footer() {
    return (
        <div className='footerContainer'>
        <div className='logoAndTitle'>
        <img src={logo} alt='logo'style={{ width: 30, height: 34.5 }} />
        <span className='schooltitle'>ABUNDANT RAIN SCHOOL</span>
        </div>
        <div></div>
        <div className='schoolHours'>
        <div className='hours'>
            <span className='subHeadings'>School Hours</span>
            <div className='DOTWhead'>
            <span className='DOTW'>Monday - Friday</span> 
            <span className='time'>7:00-3:00pm</span>
            </div>
            
        </div>
        <div className='address'>
        <span className='subHeadings'>Address</span> <br/>
        <span className='content'>P.O. Box AM 408 Amasaman</span> <br/>
        <span className='content'>GW 0042-7302</span>
        <span className='content'>Nairobi Street</span>
        <span className='content'>Abease, Amasaman</span>
        </div>
        <div className='contact'>
        <span className='subHeadings'>Contact</span> <br/>
        <span className='content'>+233 244659990</span> <br/>
        <span className='content'>+233 560009111</span> <br/>
        <span className='content'>abundantrainschool@gmail.com</span>
        </div>
        </div>
        <div className='solo'>
            <span>Motto: </span>
            <span>Let God Arise !</span>

        </div>
        </div>
    );
}