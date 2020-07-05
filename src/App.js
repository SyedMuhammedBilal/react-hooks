import React, {useState} from 'react';
import Message from './Message';
import './App.css';

function App() {
  let [ count, setCount ] = useState(0)
  let [ dark, setDark ] = useState(true)

  return (
    <div className={`box ${dark ? 'darkMode': ''}`}>
      <Message counter={count} />
      <br />
      <button onClick={() => setCount(++count)}>Increment</button>
      <button onClick={() => setDark(!dark)}>Dark Mode</button>
    </div>
  );
}

export default App;
