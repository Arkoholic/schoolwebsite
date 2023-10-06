import './App.css';
import './components/Header.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './pages/home/HomeScreen';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' exact Component={HomeScreen}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
