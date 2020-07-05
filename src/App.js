import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [ count, setCount ] = useState(1)

  return (
    <div>
      <h3>The value of count is: {count}</h3>
      <br />
      <button onClick={() => setCount(++count)}>Increment</button>
    </div>
  );
}

export default App;
