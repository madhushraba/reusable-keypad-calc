// src/App.js
import React, { useState } from 'react'; 
import Keypad from './Keyboard';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(inputValue);
        setInputValue(result.toString());
      } catch (error) {
        setInputValue('Error');
      }
    } else if (value === 'C') {
      setInputValue('');
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div className="calculation">
        <input type="text" value={inputValue} readOnly />
      </div>
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
