import React, {useState} from 'react';
import './Counter.css';

function Counter(props) {
  const {number, decreaseNumber, increaseNumber, reset} = props;

  return (
    <div className='counter'>
      <button onClick={decreaseNumber}>-</button>
      <span onClick={reset}>{number}</span>
      <button onClick={increaseNumber}>+</button>
    </div>
  )
}

export default Counter;