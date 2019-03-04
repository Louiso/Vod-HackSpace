import React , { useEffect, useRef } from 'react';

const TimeStamp = ({videoRecorder}) => {
  const getMinutes = () => {
    const minutes = videoRecorder.timeStamp.getMinutes();
    if(minutes < 10){
      return `0${minutes}`
    }return minutes;
  }
  const getSeconds = () => {
    const seconds = videoRecorder.timeStamp.getSeconds();
    if(seconds < 10){
      return `0${seconds}`
    }return seconds;
  }
  const div = useRef(null);
  useEffect(()=>{
    const interval = setInterval(()=>{
      div.current.innerHTML = `${getMinutes()}:${getSeconds()}`;
    },1000);
    return ()=>{
      clearInterval(interval);
    }; 
  });
  return <div className = "timeStamp" ref = {div}></div>;
}

export default TimeStamp;