import './App.css';
import './components/Header.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Header from './components/Header';
import HomeScreen from './pages/home/HomeScreen';
import AboutUs from './pages/AboutUs/AboutUs';
import Gallery from './pages/Gallery/Gallery';
import Footer from './components/Footer';
import PageNotFound from './pages/404Error/PageNotFound';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Headroom>
      <Header/>
    </Headroom>
      <Routes>
      <Route  path='/' exact Component={HomeScreen}/>
      <Route path='/AboutUs' Component={AboutUs}/>
      <Route path='/Gallery' Component={Gallery}/>
      {/* <Route  Component={PageNotFound}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
