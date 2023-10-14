import './App.css';
import './components/Header.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './pages/home/HomeScreen';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' exact Component={HomeScreen}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
