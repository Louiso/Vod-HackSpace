import React, { useContext } from 'react'
import VideoRespuestaCard from '../VideoRespuestaCard/VideoRespuestaCard';

import './VideoRespuestaCardList.scss'
import VodContext from '../../../Context/VodContext';

const VideoRespuestaCardList = ({ webRTC }) => {
  const { vod: { videoRespuestaActual, videoRespuestas } } = useContext(VodContext);
  const renderCardList = () => {
    return videoRespuestas.map((videoRespuesta, index) => {
      const active = videoRespuestaActual === index;
      return (
        <VideoRespuestaCard 
          webRTC = { webRTC }
          videoRespuesta = { videoRespuesta } 
          key = { index } 
          index = { index + 1 } 
          active = { active }
          />
      )
    })
  }
  return(
    <div className = "lista-video-respuestas__wrapper">
      <div className = "lista-video-respuestas" style = {{
        left: `calc( ${videoRespuestaActual} * (-760px + -16%))`
      }}>
        { renderCardList() }
      </div>
    </div>
  )
}

export default VideoRespuestaCardList;