import React , { useEffect, useRef } from 'react';
import './TimeStamp.scss';
import { dateToString } from '../../../../helpers';


const TimeStamp = ({videoRecorder}) => {
  const div = useRef(null);
  useEffect(()=>{
    const interval = setInterval(()=>{
      const { chunks } = videoRecorder;
      if(chunks.length > 0){
        const number = videoRecorder.chunks.length * 33.48329463 + (-70.62745098);
        const timeStamp = new Date();
        timeStamp.setTime(number)
        div.current.innerHTML = dateToString(timeStamp) 
      }else{
        div.current.innerHTML = '00:00:00'
      }
    },10);
    return ()=>{
      clearInterval(interval);
    }; 
  });
  return <div className = "timeStamp" ref = {div}>0:00</div>;
}

export default TimeStamp;