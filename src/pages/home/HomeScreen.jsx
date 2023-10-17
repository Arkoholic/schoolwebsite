import { useEffect } from 'react';
import './HomeScreen.css';
import Art from '../../assets/img/yellow-to-left-pluses.svg';
import Art2 from '../../assets/img/yellow-to-upperLeft.svg';
import Pic from '../../assets/img/schoolBackgroundImage.png';
import CardImage1 from '../../assets/img/cardImage1.svg';
import CardImage2 from '../../assets/img/cardImage2.svg';
import CardImage3 from '../../assets/img/cardImage3.svg';
import Card from '../../components/Card';


const HomeScreen = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    
    return (
        <>
            <div className='Home'>
                <div className='textWrapper3'>
                    Comfortable <img src={Art} alt="Art" className='vectorImage'/>
                    <img src={Pic} alt='school' className='image'/>
                </div>
                
                <div className='daycareText'>
                    <div className='textWrapper2'>
                        <span>Environ</span>
                    </div>
                    <div className='textWrapper1'>
                        ment
                    </div>
                </div>
                <div className='normalText'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>  
                <div className='decorI'>
                <div className='missionBox'>
                    <span className='subHeader'>Mission</span>
                    <span>To provide high quality child care through superior education in a safe environment</span>
                </div>
                <img src={Art2} alt='vector'/>
                </div>
                <div className='visionBox'>
                <span className='subHeader'>Vision</span>
                <span>To prepare our students to excel academically and positively influence society </span>
                </div>
                <div className='decorII'>
                    <img src={Art} alt='vector' />
                <div className='valSBox'>
                <span className='subHeader'>Core Values</span>
                <span>Excellence  |  Respect  |  Diligence  |  Discipline  |  Creativity</span>
                </div>
                </div>
                <div className='eventDiv'>
                    <span className='subHeader'>Events</span>
                </div>
                <div className='cardViews'>
                <Card
                path={CardImage1}
                title="Career Day"
                dateTime="Monday, 15th October 2023 @ 12:00pm"
                info="At ARS, we train our learners to be entrepreneurs at an early age. We inculcate into them basic career options they can choose from. "
                />
                <Card
                path={CardImage2}
                title="Traditional Day"
                dateTime="Monday, 15th October 2023 @ 12:00pm"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                />
                <Card
                path={CardImage3}
                title="Color Day"
                dateTime="Monday, 15th October 2023 @ 12:00pm"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                />
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
