import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={() => { setCounter((count) => count + 1) }}>Counter is {counter}</button>
  );
}

export default App;
