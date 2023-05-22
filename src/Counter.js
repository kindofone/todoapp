import React, {useState} from 'react';
import './Counter.css';

function Counter() {
  const [number, setNumber] = useState(0);

  const decreaseNumber = () => setNumber(number - 1);
  const increaseNumber = () => setNumber(number + 1);
  const reset = () => setNumber(0);

  return (
    <div className='counter'>
      <button onClick={decreaseNumber}>-</button>
      <span onClick={reset}>{number}</span>
      <button onClick={increaseNumber}>+</button>
    </div>
  )
}

export default Counter;