import '../pages/HomeScreen.css';
import Art from '../../assets/img/yellow-to-left-pluses.svg';
import Art2 from '../../assets/img/yellow-to-upperLeft.svg';
import Pic from '../../assets/img/schoolBackgroundImage.png';
import CardImage1 from '../../assets/img/cardImage1.svg';
import Card from '../Card';


const HomeScreen = (props) => {
    return (
        <>
            <div className='Home'>
                <div className='textWrapper3'>
                    Comfort <img src={Art} alt="Art" className='vectorImage'/>
                    <img src={Pic} alt='school' className='image'/>
                </div>
                
                <div className='daycareText'>
                    <div className='textWrapper2'>
                        <span>Day</span>
                    </div>
                    <div className='textWrapper1'>
                        care
                    </div>
                </div>
                <div className='normalText'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>  
                <div className='decorI'>
                <div className='missionBox'>
                    <span className='subHeader'>Mission</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>
                <img src={Art2} alt='vector'/>
                </div>
                <div className='visionBox'>
                <span className='subHeader'>Vision</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>
                <div className='decorII'>
                    <img src={Art} alt='vector' />
                <div className='valSBox'>
                <span className='subHeader'>Value Statement</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>
                </div>
                <div className='eventDiv'>
                    <span className='subHeader'>Upcoming Events</span>
                </div>
                <div className='cardViews'>
                <Card
                path={CardImage1}
                title={<span>PTA Meeting</span>}
                dateTime={<span>Monday, 15th October 2023 @ 12:00pm</span>}
                />
                <Card/>
                <Card/>
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
