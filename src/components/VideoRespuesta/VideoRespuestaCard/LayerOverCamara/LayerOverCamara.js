import React from 'react'
import CircleRed from './CircleRed/CircleRed';
import ButtonRecordingStart from './ButtomRecordingStart/ButtonRecordingStart';
import { STATUS } from '../../../../config/VideoRespuestaCard';
import TimeStamp from './TimeStamp/TimeStamp';
import ControlsVideoRecording from './ControlsVideoRecording/ControlsVideoRecording';
import './LayerOverCamara.scss'
import CancelarButton from './CancelarButton';

const LayerOverCamara = ({ 
    status, 
    videoRecorder, 
    handleAnimationEnd, 
    setStatus, 
    stopRecording, 
    pauseRecording, 
    reloadRecording,
    index  }) => {
  const renderButton = () => {
    if(status === STATUS.STOP || status === STATUS.PAUSE || status === STATUS.START_ANIMATION ){
      return (
        <ButtonRecordingStart
          handleAnimationEnd = { handleAnimationEnd }
          setStatusStartAnimation = { () => {
            setStatus(STATUS.START_ANIMATION)
          }}
          status = { status }
          />
      )
    }
    return null;
  }
  return(
    <div className = "entrada">
      <div className = "feedback">
        {status === STATUS.PLAY && <CircleRed/> }
        { (videoRecorder && videoRecorder.chunks.length >= 0) && <TimeStamp videoRecorder = { videoRecorder }/> }
      </div>
      { renderButton() }
      { (status === STATUS.PLAY || status === STATUS.PAUSE) && (
        <div className = "entrada__footer">
          <ControlsVideoRecording 
            stopRecording = { stopRecording } 
            reloadRecording = { reloadRecording }
            pauseRecording = { pauseRecording }
            status = { status }
          />
          <div className = "progress"/>
        </div>
      )}
      { (status === STATUS.STOP && index === 1) && (
        <CancelarButton/>
      )}
      { (status === STATUS.PLAY )&&(
        <>
          {/* <div className = "button-black-transparent contador">
            <span className = "message">Verifica tu audio y video</span><span className ="number">1</span>
          </div> */}
          <div className = "button-black-transparent grabar-nuevamente">Grabar de nuevo</div>
          <div className = "button-black-transparent siguiente">Siguiente <i className = "material-icons icon">arrow_right</i></div>
        </>
      )}
    </div>
  )
}

export default LayerOverCamara;