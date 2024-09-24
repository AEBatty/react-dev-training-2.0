
import React, {useState, useEffect} from 'react';

export const DigitalClock = () => {

  const[clock, setClock] = useState(new Date().toLocaleTimeString());


  const updateClock = () => {
    useEffect(() => {
      const id = setInterval(() => {
        setClock(new Date().toLocaleTimeString())
      }, 1000);
      console.log("init:" + id)
      return () => {
        clearInterval(id);      
        console.log("des:" + id)
      }
    }, []);
  }

  updateClock();
  

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{clock}</h2>
    </div>
  );
};
