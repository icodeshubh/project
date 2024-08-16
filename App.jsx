

import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([]);

  const handleSubtract = () => {
    if (num > 0) {
      setNum(Math.max(0, num - 1));
      setHistory((prevHistory) => [...prevHistory, num - 1]);
    }
  };

  const handleAdd = () => {
    if (num < 150) {
      setNum(Math.min(150, num + 1));
      setHistory((prevHistory) => [...prevHistory, num + 1]);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      setNum(history[history.length - 1]);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  const handleRedo = () => {
    if (history.length > 0 && history.length < 150) {
      setNum(history[history.length]);
      setHistory((prevHistory) => [...prevHistory, history[history.length]]);
    }
  };

  return (
    <div className='main'>
      <h1>COUNTER</h1>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAdd}>+</button>
      <div>

        {num}
      </div>
      
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
}

export default App;

