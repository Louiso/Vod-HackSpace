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
  }
  handleDataAvailable = (e) => {
    if (e.data && e.data.size > 0) {
      this.chunks.push(e.data);
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
    return new Promise((resolve, reject)=>{
      this.mediaRecorder.stop();
      this.mediaRecorder.onstop = () => {
        const chunksLength = this.chunks.length;
        this.chunks = []
        resolve({
          videoURL: this.videoURL,
          chunksLength: chunksLength
        });
      };
      const blob = new Blob(this.chunks, this.options);
      this.videoURL = window.URL.createObjectURL(blob);
    });
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