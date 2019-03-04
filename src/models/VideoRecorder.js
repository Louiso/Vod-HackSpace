import { useState , useEffect } from 'react';
import { getOptionsMediaRecorder } from "../config/webcam";

class VideoRecorder {
  constructor(stream){
    this.options = getOptionsMediaRecorder();
    this.mediaRecorder = null;
    this.videoURL = null;
    this.chunks = [];
    this.stream = stream;
    this.iniRecorder();
    this.lastTime = null;
    this.timeStamp = new Date(0);
  }
  handleDataAvailable = (e) => {
    if (e.data && e.data.size > 0) {
      this.chunks.push(e.data);
      if(this.lastTime){
        const time = new Date();
        const dt = time - this.lastTime;
        this.timeStamp.setTime( this.timeStamp.getTime() + dt);
        this.lastTime = time;

      }else{
        this.lastTime = new Date();
      }
    }
  }
  pauseRecording = () => {
    this.mediaRecorder.pause();
  }
  continueRecording = () => {
    this.mediaRecorder.resume();
  }
  iniRecorder = () => {
    try{
      this.mediaRecorder = new MediaRecorder(this.stream, this.options);
      this.mediaRecorder.ondataavailable = this.handleDataAvailable;
      this.mediaRecorder.onstop = () => this.chunks = [];   
    }catch(e){
      console.error('Exception while creating MediaRecorder:', e);
    }
  }
  startRecording(){
    this.chunks = [];
    this.iniRecorder();
    this.mediaRecorder.start(10);
  }
  stopRecording(){
    this.mediaRecorder.stop();
    const blob = new Blob(this.chunks, this.options);
    this.videoURL = window.URL.createObjectURL(blob);
  }
  static useVideoRecorder(stream, active){
    const [ videoRecorder, setVideoRecorder ] = useState(null);
    useEffect(()=>{
      if(stream && active ){
        setVideoRecorder(new VideoRecorder(stream));
      }
    },[stream, active])
    return videoRecorder;
  }
}

export default VideoRecorder;