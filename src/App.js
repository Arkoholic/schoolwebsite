import './App.css';
import './components/Header.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Header from './components/Header';
import HomeScreen from './pages/home/HomeScreen';
import AboutUs from './pages/AboutUs/AboutUs';
import Gallery from './pages/Gallery/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Headroom>
      <Header/>
    </Headroom>
      <Routes>
      <Route path='/' exact Component={HomeScreen}/>
      <Route path='/AboutUs' Component={AboutUs}/>
      <Route path='/Gallery' Component={Gallery}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
