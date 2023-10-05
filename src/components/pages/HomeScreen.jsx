import '../pages/HomeScreen.css';
import Art from '../../assets/img/yellow-to-left-pluses.svg';

const HomeScreen = (props) => {
    return (
        <>
            <div className='Home'>
                <div className='textWrapper3'>
                    Comfort <img src={Art} alt="Art" />
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
            </div>
        </>
    );
};

export default HomeScreen;
