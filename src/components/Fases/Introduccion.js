import React from 'react';
const Introduccion = ({ goFaseGrabacion}) => {
  return(
    <>
      <div className = "window__content-introduccion">
        <img className = "fondo-introduccion" src = '/fondo.png' alt = ""/>
      </div>
      <div className = "window__skip" onClick = { goFaseGrabacion }>Skip</div>
    </>
  )
}

export default Introduccion;