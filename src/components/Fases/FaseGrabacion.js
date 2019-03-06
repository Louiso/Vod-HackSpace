import React, { useState , useEffect, useContext } from 'react'
import VideoRespuestaCardList from '../VideoRespuesta/VideoRespuestaCardList/VideoRespuestaCardList';
import { getStream } from '../../config/webcam';
import { Modal } from 'antd'
import VodContext from '../../Context/VodContext';
import './FaseGrabacion.scss'

const FaseGrabacion = () => {
  const { vod: { videoRespuestas, videoRespuestaActual } } = useContext(VodContext);
  const [ webRTC , setWebRTC ] = useState({stream: null})
  const [ openModal , setOpenModal ] = useState(false);
  const renderPoints = () => {
    return videoRespuestas.map((_, index)=>(
      <div 
        key = { index } 
        className = {`punto ${videoRespuestaActual === index && 'punto-active'}`}/>
    ))
  }
  useEffect(()=>{
    getStream()
      .then(stream => {
        setWebRTC({stream});
      })
  },[]);
  
  return(
    <div className = "window__content-grabacion">
      <Modal
        visible={openModal}
        onCancel={()=>{
          setOpenModal(false);
        }}
        centered = {true}
        footer = {null}
        width = "376px"
        bodyStyle = {{
          paddingLeft: 28,
          paddingTop: 30,
          paddingRight: 28,
          paddingBottom: 24
        }}
      >
        <div className = "Modal">
          <div className = "Modal__title">Tenemos un problema con tu audio y video</div>
          <div className = "Modal__text">Recuerda probar la camara y el audio de tus dispositivo para poder tener una mejor calidad de imagen para tu entrevista</div>
          <div className = "Modal__config">Configurar</div>
        </div>
      </Modal>
      <VideoRespuestaCardList
        webRTC = { webRTC }
        />
      <div className = "puntos">{renderPoints()}</div>
    </div>
  )
}


export default FaseGrabacion;