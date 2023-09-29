//import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Profile from './components/Profile';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
     <Message messageCode="5050" messageContent="Have you brushed your teeth?" />
   
     <Message messageCode="9510" messageContent="Would Harry Kane score a goal?" />
      
      
    </div>
  );
}

export default App;
