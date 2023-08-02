import { useState } from 'react';
import './App.css';
import Home from './components/Home.js';
import StartGame from './components/StartGame';

function App() {
  const [playGame, setPlayGame ] = useState(false);

  const togglePlay = () => {
    setPlayGame((prev) => !prev)
  }

  return (
    <>
      { playGame ? <StartGame /> : <Home  toggle ={togglePlay}/> }
    </>
  );
}

export default App;
