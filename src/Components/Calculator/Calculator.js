import React, { useState } from 'react';
import './Calculator.css';
const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result + e.target.name);
    console.log(result);
  };
  const Calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult('error');
    }
  };

  const Clear = () => {
    setResult('');
  };

  return (
    <div className='calculator-container'>
      <h1 className='calculator-title'>Calculator</h1>
      <input
        type='text'
        className='calculator-input'
        value={result}
      />
      <br />
      <br />
      <button
        className='calculator-button'
        name='0'
        onClick={handleClick}
      >
        0
      </button>
      <button
        className='calculator-button'
        name='1'
        onClick={handleClick}
      >
        1
      </button>
      <button
        className='calculator-button'
        name='2'
        onClick={handleClick}
      >
        2
      </button>
      <button
        className='calculator-button'
        name='3'
        onClick={handleClick}
      >
        3
      </button>
      <button
        className='calculator-button'
        name='4'
        onClick={handleClick}
      >
        4
      </button>
      <button
        className='calculator-button'
        name='5'
        onClick={handleClick}
      >
        5
      </button>
      <button
        className='calculator-button'
        name='6'
        onClick={handleClick}
      >
        6
      </button>
      <button
        className='calculator-button'
        name='7'
        onClick={handleClick}
      >
        7
      </button>
      <button
        className='calculator-button'
        name='8'
        onClick={handleClick}
      >
        8
      </button>
      <button
        className='calculator-button'
        name='9'
        onClick={handleClick}
      >
        9
      </button>
      <br />
      <br />
      <button
        className='calculator-button'
        name='-'
        onClick={handleClick}
      >
        -
      </button>
      <button
        className='calculator-button'
        name='+'
        onClick={handleClick}
      >
        +
      </button>
      <button
        className='calculator-button'
        name='/'
        onClick={handleClick}
      >
        /
      </button>
      <button
        className='calculator-button'
        name='*'
        onClick={handleClick}
      >
        x
      </button>

      <button
        className='calculator-button'
        name='='
        onClick={Calculate}
      >
        =
      </button>

      <button
        className='calculator-button'
        name='C'
        onClick={Clear}
      >
        C
      </button>
    </div>
  );
};

export default Calculator;
