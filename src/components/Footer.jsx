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
            <span className='DOTW'>Monday</span>
            <span className='time'>7:00-5:00pm</span>
            </div>
            <div className='DOTWhead'>
            <span className='DOTW'>Tuesday</span>
            <span className='time'>7:00-5:00pm</span>
            </div>
            <div className='DOTWhead'>
            <span className='DOTW'>Wednesday</span>
            <span className='time'>7:00-5:00pm</span>
            </div>
            <div className='DOTWhead'>
            <span className='DOTW'>Thursday</span>
            <span className='time'>7:00-5:00pm</span>
            </div>
            <div className='DOTWhead'>
            <span className='DOTW'>Friday</span>
            <span className='time'>7:00-5:00pm</span>
            </div>
        </div>
        <div className='address'>
        <span className='subHeadings'>Address</span> <br/>
        <span className='content'>Street Name</span> <br/>
        <span className='content'>GM-025 2455</span>
        </div>
        <div className='contact'>
        <span className='subHeadings'>Contact</span> <br/>
        <span className='content'>+233 255845252</span> <br/>
        <span className='content'>abundantrainschool@gmail.com</span>
        </div>
        </div>
        <div className='solo'>Let God arise !!</div>
        </div>
    );
}