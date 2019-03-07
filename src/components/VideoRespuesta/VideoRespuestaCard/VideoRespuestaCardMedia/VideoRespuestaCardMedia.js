import React, { useState , useRef , useContext, useEffect } from 'react';
import { STATUS } from '../../../../config/VideoRespuestaCard';
import LayerOverCamara from '../LayerOverCamara/LayerOverCamara';
import VodContext from '../../../../Context/VodContext';
import VideoRecorder from '../../../../models/VideoRecorder';

import './VideoRespuestaCardMedia.scss'

const VideoRespuestaCardMedia = ( { index , active, videoRespuesta, stream} ) => {
  const { dispatch } = useContext(VodContext);
  const videoRecorder = VideoRecorder.useVideoRecorder(stream,active);
  const [ status , setStatus ] = useState(STATUS.STOP);
  const video = useRef(null);
  const handleAnimationEnd = () => {
    if(videoRecorder.chunks.length === 0){
      videoRecorder.startRecording();
    }else{
      videoRecorder.continueRecording();
    }
    setStatus(STATUS.PLAY);
  }
  
  /* Se le pasa el boton del medio */
  const pauseRecording = () => {
    videoRecorder.pauseRecording();
    setStatus(STATUS.PAUSE);
  }
  const reloadRecording = async () => {
    await videoRecorder.stopRecording();
    setStatus(STATUS.START_ANIMATION);
  }
  const stopRecording = async () => {
    const { videoURL, chunksLength } = await videoRecorder.stopRecording();
    dispatch({
      type: 'updateVideoRespuesta',
      videoRespuesta:{
        ...videoRespuesta,
        videoURL: videoURL,
        chunksLength: chunksLength
      },
      index: index - 1
    });
    setStatus(STATUS.STOP);
  }

  useEffect(() => {
    // console.log(index,stream, active, videoRecorder);
    if(stream && active && videoRecorder){
      if(!video.current.srcObject){
        video.current.srcObject = stream;
        video.current.muted = true;
      }
      video.current.play();
    }else{
      video.current.pause();
    }
  },[stream, active, videoRecorder]);

  return (
    <div className = "video-respuesta__video">
      <div className = "video__wrapper">
        <video className = "video" ref = { video } muted = { true }/>
      </div>
      <LayerOverCamara 
        index = { index }
        status = { status } 
        videoRecorder = { videoRecorder } 
        handleAnimationEnd = { handleAnimationEnd } 
        setStatus = { setStatus }
        stopRecording = { stopRecording }
        reloadRecording = { reloadRecording }
        pauseRecording = { pauseRecording }
      />
    </div>
  )
}

export default VideoRespuestaCardMedia;