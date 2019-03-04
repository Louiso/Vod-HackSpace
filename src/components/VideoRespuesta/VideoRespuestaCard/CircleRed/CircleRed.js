import React, { useState , useEffect } from 'react';
import './CircleRed.scss';
const CircleRed = () => {
  const [ circleHidden , setCircleHidden ] = useState(true);
  useEffect(()=>{
    let interval = setInterval( () => {
      setCircleHidden(prevState => !prevState)
    },1500);
    return ()=>{
      clearInterval(interval);
    }
  },[]);
  return (
    <div className = {`circle-red ${circleHidden && 'circle-red-hidden'}`}/>
  );
}

export default CircleRed;