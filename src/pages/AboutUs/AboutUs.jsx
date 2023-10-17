import { useEffect } from 'react';
import './AboutUs.css';

function AboutUs () {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    
    return (
    <div className='aboutUs'>
        <div className='backgroundImage'>
            <h1 style={{fontSize:48}}>About Us</h1>
        </div>
        <div className='aboutUsText'>
            <span>Lorem ipsum dolor sit amet consectetur. Enim viverra id fermentum interdum. Sit sit aliquam laoreet magna quisque turpis sed. Tellus nam viverra phasellus aliquam. Aliquam ipsum id condimentum quis ac posuere. Congue sagittis pellentesque nibh magna vel. Felis potenti at cursus interdum ullamcorper. Suspendisse nisi porttitor platea amet amet aliquet. Porta tincidunt nunc ultricies nunc egestas elementum mattis faucibus. Mollis diam risus tortor consequat orci aenean augue mauris.</span>
        </div>
        <div className='eventDiv2'>
            <span className='subHeader2'>Our Proprietress</span>
            <div className='founderDiv'>
            <div className='proPic'>
            <img src='https://scontent-ams2-1.xx.fbcdn.net/v/t31.18172-8/18839642_10154747973483651_5310422604915047512_o.jpg?stp=c0.78.304.304a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeFrg7jQ7Lhe_OA_7axEVZg8_RQGkLJUlkv9FAaQslSWSwxjN3lHEGwsNbaVAFa5gIa6WX8h9N4sXw7sX_0UfNEX&_nc_ohc=x6vGaqlJgC8AX_fuJdi&_nc_ht=scontent-ams2-1.xx&oh=00_AfAPAEtU3uKQ85EhmOKHBjNDuxQ9vcvbhyDVsaKGTrnccQ&oe=6554DA4A' alt='' />
            </div>
            <>
            <span className='founderDesc'>Lorem ipsum dolor sit amet consectetur. Enim viverra id fermentum interdum. Sit sit aliquam laoreet magna quisque turpis sed. Tellus nam viverra phasellus aliquam. Aliquam ipsum id condimentum quis ac posuere. Congue sagittis pellentesque nibh magna vel. Felis potenti at cursus interdum ullamcorper.</span>
            </>
            
            
        </div>
        </div>
       
    </div>
    
    );
}

export default AboutUs;