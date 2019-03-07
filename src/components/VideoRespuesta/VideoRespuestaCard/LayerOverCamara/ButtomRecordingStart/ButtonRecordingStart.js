import React from 'react';
import './ButtonRecordingStart.scss';
import { STATUS } from '../../../../../config/VideoRespuestaCard';

const ButtonRecordingStart = ({ handleAnimationEnd , status , setStatusStartAnimation }) => {
  const renderMessage = () => {
    if(status === STATUS.STOP ){
      return 'Iniciar'
    }else if( status === STATUS.PAUSE ){
      return 'Continuar'
    }
    return null;
  }
  return(
    <>
      <div className = "entrada__button" onClick = { setStatusStartAnimation }>
        <div onAnimationEnd = {handleAnimationEnd} className = {`circle-mid ${ status === STATUS.START_ANIMATION && 'circle-mid-recordingAnimation'}`}>
        <span className = "message">{ renderMessage() }</span>
        </div>
      </div>
      <div className = "entrada__message">
        Presiona la barra espaciadora para empezar o pausar la grabacion
      </div>
    </>
  );
}

export default ButtonRecordingStart;