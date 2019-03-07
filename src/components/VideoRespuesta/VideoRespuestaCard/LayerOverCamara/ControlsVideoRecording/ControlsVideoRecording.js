import React from 'react';
import './ControlsVideoRecording.scss'
import { STATUS } from '../../../../../config/VideoRespuestaCard';


const ControlsVideoRecording = ( { stopRecording , reloadRecording, pauseRecording , status } ) => {
  return(
    <div className = "controles">
      <div className = "tools">
        { status !== STATUS.PAUSE && <i className = "material-icons pause" onClick = { pauseRecording }>pause</i> }
        <i className = "material-icons reiniciar" onClick = { reloadRecording }>replay</i>
        <i className = "material-icons parar" onClick = { stopRecording }>stop</i>
      </div>
      <i className = "material-icons options">settings</i>
    </div>
  );
}

export default ControlsVideoRecording;