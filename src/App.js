import React, { useState } from 'react';

import './App.scss';
import FaseGrabacion from './components/Fases/FaseGrabacion';
import Introduccion from './components/Fases/Introduccion';
import GridGrabacion from './components/Fases/GridGrabacion';
import "antd/dist/antd.css";
import myVod from './api';

const App = () => {
  const [ fase, setFase ] = useState(0);
  const [ vod ] = useState(myVod);
  const getWindowContent = () => {
    const windowContent = [
      <Introduccion goFaseGrabacion = { () => setFase(1)}/>,
      <FaseGrabacion vod = { vod }/>,
      <GridGrabacion/>
    ]
    return windowContent[fase];
  }
  return (
    <div className="krowdy">
      <div className = "krowdy__header">
        <img className = "krowdy__header__logo" src = "/krowdy.png" alt=""/>
        <div className = "krowdy__header__user">
          <div className = "krowdy__header__user__name">Luis Sullca</div>
          <img className = "krowdy__header__user__photo" src = "/luisfoto.png"  alt = ""/>
          <i className = "material-icons more">arrow_drop_down</i>
        </div>
      </div>
      <div className = "krowdy__main">
        <div className = "krowdy__main__options">
          <div className = "krowdy__main__options__main">
            <i className = "material-icons option">menu</i>
            <i className = "material-icons option option-active">live_tv</i>
          </div>
          <i className = "material-icons flag">flag</i>
        </div>
        <div className = "krowdy__main__content">
          <div className = "krowdy__main__content__header">
            <div className = "header__main">
              <div className = "header__main__back">
                <i className = "material-icons header__main__back__icon">arrow_back</i>
                <div className = "header__main__back__text">Atras</div>
              </div>
              <div className = "header__main__info">
                <div className = "header__main__info__title">Video Cuestionario</div>
                <div className = "header__main__info__subtitle">BCP-Sub Gerente de Ingenieria de Defensa de Ciberseguridad</div>
              </div>
            </div>
          </div>
          <div className = "window">
            <div className = "window__bg-bar">
              <h6 className = "window__bg-bar__title">Cuestionario para Diseñador UX/UI</h6>
              <div className = "window__bg-bar__preguntas" onClick = { () => setFase(2)} >
                <div className = "window__bg-bar__preguntas__text">Ver preguntas</div>
                <i className = "material-icons window__bg-bar__preguntas__icon">view_module</i>
              </div>
            </div>
            { getWindowContent() }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
