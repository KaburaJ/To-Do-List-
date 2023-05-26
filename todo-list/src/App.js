
import './App.css';
import Calenda from './components/calendar';
import Todo from './components/todo';
import Input from './components/input';
import Card1 from './components/card1';
import Card2 from './components/card2';
import Card3 from './components/card3';
import Card4 from './components/card4';

function App() {
  
  
  return (
    <div className='main-container'>
      <Todo/>
      <Calenda/>
      <Input/>
    
    <div className='cards'>
      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
    </div>


 
    </div>
  );
}

export default App;
