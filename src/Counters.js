import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import './Counters.css';

const URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

function Counters(props) {
  const [number, setNumber] = useState(0);
  const [temperature, setTemperature] = useState(null);

  const decreaseNumber = () => setNumber(number - 1);
  const increaseNumber = () => setNumber(number + 1);
  const reset = () => setNumber(0);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setTemperature(data.current_weather.temperature));
  }, []);

  useEffect(() => {
    if (number === 10) {
      reset();
    }
  }, [number]);

  return (
    <div className='counters-container'>
      {temperature !== null ? temperature : "Loading..."}
      {Array(props.numberOfCounters).fill(<Counter 
        number={number} 
        decreaseNumber={decreaseNumber} 
        increaseNumber={increaseNumber} 
        reset={reset} 
      />)}
    </div>
  )
}

export default Counters;