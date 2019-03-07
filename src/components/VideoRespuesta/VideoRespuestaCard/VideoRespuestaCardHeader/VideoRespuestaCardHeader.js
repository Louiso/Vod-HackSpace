import React, { useContext } from 'react';
import VodContext from '../../../../Context/VodContext';
import './VideoRespuestaCardHeader.scss'

const VideoRespuestaCardHeader = ({index, videoRespuesta, active }) => {
  const { dispatch } = useContext(VodContext);
  return (
    <div className = "video-respuesta__header">
      <div className = "title">
        <div className = "index">{index}</div>
        <div className = "pregunta">{videoRespuesta.pregunta}</div>
      </div>
      { !active && (
        <>
          <div className = "video-respuesta__header__before" onClick = { () => dispatch({type: 'NEXT'}) }></div>
          <div className = "video-respuesta__header__after" onClick = { () =>  dispatch({type: 'PREV'})}></div>
        </>
      ) }
    </div>
  )
}

export default VideoRespuestaCardHeader;