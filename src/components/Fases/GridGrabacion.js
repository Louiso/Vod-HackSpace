import React from 'react'
import myVod from '../../api';
import GrabacionCard from '../GrabacionCard/GrabacionCard';
import './GridGrabacion.scss'

const GridGrabacion = () => {
  return (
    <div className = "grid-grabacion">
      <div className = "grabacionCards-container">
        { myVod.videoRespuestas.map((videoRespuesta, index)=>(
          <GrabacionCard index = { index } key = { index } grabacion = { videoRespuesta }/>
        ))}
      </div>
      <div className  = "submit">
        <div className = "submit__message">Debes responder todas las preguntas para enviar la tarea</div>
        <div className = "submit__button">Enviar tarea</div>
      </div>
    </div>
  );
}

export default GridGrabacion;