const getMinutes = (timeStamp) => {
  const minutes = timeStamp.getMinutes();
  if(minutes < 10){
    return `0${minutes}`
  }return minutes;
}
const getSeconds = (timeStamp) => {
  const seconds = timeStamp.getSeconds();
  if(seconds < 10){
    return `0${seconds}`
  }return seconds;
}
const getMilliSeconds = (timeStamp) => {
  const milliSeconds = Math.floor(timeStamp.getMilliseconds() / 10);
  
  if(milliSeconds < 10){
    return `0${milliSeconds}`
  }return milliSeconds;
}

const fromChunkToString = (chunksLength) => {
  const number = chunksLength * 33.48329463 + (-70.62745098);
  const timeStamp = new Date();
  timeStamp.setTime(number);
  return dateToString(timeStamp);
}
const dateToString = (timeStamp) => {
  if(!timeStamp) return;
  return `${getMinutes(timeStamp)}:${getSeconds(timeStamp)}:${getMilliSeconds(timeStamp)}`;
}
export {
  dateToString,
  fromChunkToString
}