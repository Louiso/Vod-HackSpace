import React, { useContext, useRef, useState } from 'react';
import './Grabacion.scss';
import VodContext from '../../Context/VodContext';
import { fromChunkToString } from '../../helpers';

const STATUS = {
  PLAY: 0,
  PAUSE: 1
}

const GrabacionCard = ({videoRespuesta, index}) => {
  const { dispatch } = useContext(VodContext);
  const [ status , setStatus ] = useState(STATUS.PAUSE);
  const videoRef = useRef(null); 
  const handleClick = () => {
    if(!videoRespuesta.videoURL) return;

    if(status === STATUS.PLAY){
      videoRef.current.pause();
      setStatus(STATUS.PAUSE);
    }else{
      videoRef.current.play();
      setStatus(STATUS.PLAY);
    }
  }
  const renderIconPlay = () => {
    if(!videoRespuesta.videoURL){
      return '+'
    }
    if(status === STATUS.PLAY){
      return <i className = "material-icons">pause</i>
    }else{
      return <i className = "material-icons">play_arrow</i>
    }
  }
  const renderTimeStamp = () => {
    const { chunksLength } = videoRespuesta;
    if(chunksLength > 0){
      return fromChunkToString(chunksLength); 
    }else{
      return '00:00:00'
    }
  }
  return(
    <div className = "grabacionCard">
      <div className = "grabacionCard__media">
        <div className = "grabacionCard__media__video__wrapper" onClick = {()=> dispatch({
          type: 'goVideoRespuestaCard',
          videoRespuestaActual: index
        })}>
          <video 
            poster = "https://us.123rf.com/450wm/victor4/victor41411/victor4141100020/33741924-retrato-de-un-hombre-sonriente-a-la-c%C3%A1mara.jpg?ver=6" 
            onEnded = { () => setStatus(STATUS.PAUSE) } 
            ref = {videoRef} 
            className = "grabacionCard__media__video" 
            src = {videoRespuesta.videoURL } 
            alt = ""/>
        </div>
        <div className = "button-play" onClick = { handleClick }>
          { renderIconPlay() }
        </div>
      </div>
      <div className = "grabacionCard__info">
        <div className = "grabacionCard__info__contador">Pregunta {index + 1}</div>
        <div className = "grabacionCard__info__pregunta">{videoRespuesta.pregunta}</div>
        <div className = "grabacionCard__info__divider"/>
        <div className = "grabacionCard__info__timeStamp">{ renderTimeStamp() } </div>
      </div>
    </div>
  )
}

export default GrabacionCard;