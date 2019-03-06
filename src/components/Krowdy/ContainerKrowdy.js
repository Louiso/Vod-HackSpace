import React, { useContext } from 'react';
import VodContext from '../../Context/VodContext';
import './ContainerKrowdy.scss'

const ContainerKrowdy = ({children }) => {
  const { vod: {fase}, dispatch } = useContext(VodContext);
  return (
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
              <div className = "window__bg-bar__preguntas" onClick = { () => dispatch({
                type: 'updateFase',
                fase: 2
              })} >
                <div className = "window__bg-bar__preguntas__text">Ver preguntas</div>
                <i className = "material-icons window__bg-bar__preguntas__icon">view_module</i>
              </div>
            </div>
            { children }
          </div>
          { fase !== 0 && (
            <div className = "soporte-tecnico">
              <span className = "name">Soporte Tecnico</span>
              <i className = "material-icons chat">chat</i>
            </div>
          )}
        </div>
      </div>
  );
}

export default ContainerKrowdy;