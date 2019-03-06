import React, { useContext } from 'react'
import GrabacionCard from '../GrabacionCard/GrabacionCard';
import './GridGrabacion.scss'
import VodContext from '../../Context/VodContext';

const GridGrabacion = () => {
  const { vod : { videoRespuestas }} = useContext(VodContext);
  return (
    <div className = "grid-grabacion">
      <div className = "grabacionCards-container">
        { videoRespuestas.map((videoRespuesta, index)=>(
          <GrabacionCard index = { index } key = { index } videoRespuesta = { videoRespuesta }/>
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