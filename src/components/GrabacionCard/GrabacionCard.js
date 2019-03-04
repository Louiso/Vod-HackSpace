import React from 'react';
import './Grabacion.scss';

const GrabacionCard = ({grabacion, index}) => {
  return(
    <div className = "grabacionCard">
      <div className = "grabacionCard__media">
        <img alt = ""/>
        <div className = "button-play">
          +
        </div>
      </div>
      <div className = "grabacionCard__info">
        <div className = "grabacionCard__info__contador">Pregunta {index}</div>
        <div className = "grabacionCard__info__pregunta">{grabacion.pregunta}</div>
        <div className = "grabacionCard__info__divider"/>
        <div className = "grabacionCard__info__timeStamp">0:00</div>
      </div>
    </div>
  )
}

export default GrabacionCard;