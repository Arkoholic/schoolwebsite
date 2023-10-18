import './App.css';
import './components/Header.css';
import { Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Header from './components/Header';
import HomeScreen from './pages/home/HomeScreen';
import AboutUs from './pages/AboutUs/AboutUs';
import Gallery from './pages/Gallery/Gallery';
import Footer from './components/Footer';
import Admissions from './pages/Admissions/Admissions';
import PageNotFound from './pages/404Error/PageNotFound';

function App() {
  return (
    <div className='App'>
    
    <Headroom>
      <Header/>
    </Headroom>
      <Routes>
      <Route exact path='/'  Component={HomeScreen}/>
      <Route path='/AboutUs' Component={AboutUs}/>
      <Route path='/Gallery' Component={Gallery}/>
      <Route  path='/Admissions'Component={Admissions}/>
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;