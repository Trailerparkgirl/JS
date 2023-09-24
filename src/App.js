import './App.css';
import {useState} from 'react';
import Flashcard from './Flashcard';

function App() {
  const [cardIsOpen, setCardIsOpen] = useState(false);
  function flashCreator(){
    setCardIsOpen(true);
  }
  return (
    <div>
      <div>
      <h1 className='App'>Resta's FLASHCARD APP</h1>
      <div className="modal">
        <p>click to generate a flashcard</p>
        <button className='btn' onClick={flashCreator}>Click on me</button>
      </div>
      </div>
      {cardIsOpen && <Flashcard ran />}
    </div>
  );
}

export default App;
