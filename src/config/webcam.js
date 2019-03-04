const constraints = {
  audio: {
    echoCancellation: {
      exact: true
    }
  },
  video: true
}
const errorGetMedia = () => {
  navigator.getMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia);

  navigator.getMedia ({video: true,audio: true},
    function(localMediaStream) {
      return localMediaStream;
    },
    // errorCallback *Opcional
    function(err) {
      console.log("Ocurrió el siguiente error: " + err);
    }
  );
}
const getStream = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia (constraints)
    return stream;
  }catch(e){
    errorGetMedia();
  }
}

const getOptionsMediaRecorder = () => {
  let options = {mimeType: 'video/webm;codecs=vp9'};
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    options = {mimeType: 'video/webm;codecs=vp8'};
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      options = {mimeType: 'video/webm'};
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options = {mimeType: ''};
      }
    }
  }
  return options;
}

export {
  getStream,
  getOptionsMediaRecorder
}