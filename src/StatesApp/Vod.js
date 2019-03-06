import { useReducer } from 'react';
import { produce } from 'immer';
import VideoRespuesta from '../models/VideoRespuesta';

const initialState = {
  videoRespuestas : [
    new VideoRespuesta("¿Consideras tener una amplia experiencia en el tema de diseño de productos digitales?"),
    new VideoRespuesta("¿En donde te ves en 5 años?"),
    new VideoRespuesta("¿Cuales son tus metas?"),
    new VideoRespuesta("¿Cuales son las primeras diferencias que encuentras entre UX y UI? 2"),
    new VideoRespuesta("¿Cuales son las primeras diferencias que encuentras entre UX y UI?")
  ],
  videoRespuestaActual: 0,
  fase: 0
}

const VodReducer = (state, action) => {
  switch(action.type){
    case 'goVideoRespuestaCard': {
      state.fase = 1;
      state.videoRespuestaActual = action.videoRespuestaActual;
      return;
    }
    case 'updateFase': {
      state.fase = action.fase;
      return;
    }
    case 'updateVideoRespuesta':{
      state.videoRespuestas[action.index] = action.videoRespuesta;
      return;
    }
    case 'NEXT':
    {
      if(state.videoRespuestaActual + 1 < state.videoRespuestas.length){
        state.videoRespuestaActual++;
      }
      return;
    }
    case 'PREV':{
      if(state.videoRespuestaActual > 0){
        state.videoRespuestaActual--;
      }
      return;
    }
    case 'HOLA_MUNDO':
      console.log(':v');
      return;
    default:
      return state;
  }
}

function useImmerReducer(reducer, initialState){
  return useReducer(produce(reducer), initialState);
}

const useVod = () => {
  const [ vod , dispatch ] = useImmerReducer(VodReducer, initialState);
  return [ vod , dispatch ];
}

export default useVod;