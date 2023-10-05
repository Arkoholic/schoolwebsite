import './App.css';
import './Header.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './components/pages/HomeScreen';

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
