import React from 'react';

import './VideoRespuestaCard.scss';
import VideoRespuestaCardHeader from './VideoRespuestaCardHeader/VideoRespuestaCardHeader';
import VideoRespuestaCardMedia from './VideoRespuestaCardMedia/VideoRespuestaCardMedia';


const VideoRespuestaCard = ({ active , webRTC: { stream }, index, videoRespuesta }) => {  
  return (
    <div className = {`video-respuesta ${active && 'video-respuesta-active'}`}>
      <VideoRespuestaCardHeader active = { active } index = { index } videoRespuesta = { videoRespuesta } />
      <VideoRespuestaCardMedia stream = { stream } active = { active } index = { index } videoRespuesta = { videoRespuesta }/>
    </div>
  )
}

export default VideoRespuestaCard;