import React , { useState , useRef, useEffect } from 'react';

import './VideoRespuestaCard.scss';
import VideoRecorder from '../../../models/VideoRecorder';
import ButtonRecordingStart from './ButtomRecordingStart/ButtonRecordingStart';
import ControlsVideoRecording from './ControlsVideoRecording/ControlsVideoRecording';
import CircleRed from './CircleRed/CircleRed';
import TimeStamp from './TimeStamp/TimeStamp';

export const STATUS = {
  STOP: 0,
  START_ANIMATION:1,
  PLAY: 2,
  PAUSE: 3
};
const VideoRespuestaCard = ({ active , webRTC: { stream }, index, videoRespuesta, next , prev}) => {
  const videoRecorder = VideoRecorder.useVideoRecorder(stream,active);
  const [ status , setStatus ] = useState(STATUS.STOP);
  const video = useRef(null);
  /* Se le pasa el boton del medio */
  const pauseRecording = () => {
    videoRecorder.pauseRecording();
    setStatus(STATUS.PAUSE);
  }
  const handleAnimationEnd = () => {
    if(videoRecorder.chunks.length === 0){
      videoRecorder.startRecording();
    }else{
      videoRecorder.continueRecording();
    }
    setStatus(STATUS.PLAY);
  }
  const reloadRecording = () => {
    videoRecorder.stopRecording();
    setStatus(STATUS.START_ANIMATION);
  }
  const stopRecording = () => {
    videoRecorder.stopRecording();
    setStatus(STATUS.STOP);
  }

  useEffect(() => {
    if(stream && active && videoRecorder){
      video.current.srcObject = stream;
      video.current.muted = true;
      video.current.play();  
    }else{
      video.current.pause();
    }
  },[stream, active, videoRecorder]);

  
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
  return (
    <div className = {`video-respuesta ${active && 'video-respuesta-active'}`}>
      <div className = "video-respuesta__header">
        <div className = "title">
          <div className = "index">{index}</div>
          <div className = "pregunta">{videoRespuesta.pregunta}</div>
        </div>
        { !active && (
          <>
            <div className = "video-respuesta__header__before" onClick = { () => next() }></div>
            <div className = "video-respuesta__header__after" onClick = { () => prev() }></div>
          </>
        ) }
      </div>
      <div className = "video-respuesta__video">
        <div className = "video__wrapper">
          <video className = "video" ref = { video } muted = { true }/>
          <div className = "entrada">
            { status === STATUS.PLAY && (
              <div className = "feedback">
                <CircleRed/>
                <TimeStamp videoRecorder = { videoRecorder }/>
              </div>
            )}
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
          </div>
        </div>
      </div>
      { (status === STATUS.STOP && index === 1) && (
          <div className = "cancelar-fase">
            <i className = "material-icons cancelar-fase__icon">close</i>
            <div className = "cancelar-fase__text">Cancelar</div>
          </div>
        )}
    </div>
  )
}

export default VideoRespuestaCard;

// if(recording){
      // }else{
      //   video.current.srcObject = null;
      //   if(videoRecorder.videoURL){
      //     video.current.src = videoRecorder.videoURL;
      //     video.current.muted = false;
      //     video.current.play();
      //   }
      // }