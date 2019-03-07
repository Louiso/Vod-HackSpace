import React, { useContext, useState } from 'react'
import VodContext from '../../../../Context/VodContext';

const CancelarButton = () => {
  const { dispatch } = useContext(VodContext);
  const [ show , setShow ] = useState(true);
  if(!show) return null;
  return(
    <div className = "cancelar-fase button-black-transparent">
      <i className = "material-icons cancelar-fase__icon" onClick = {()=> setShow(false)}>close</i>
      <div 
        className = "cancelar-fase__text" 
        onClick = { () => dispatch({
          type: 'updateFase',
          fase: 0
        })}>Cancelar</div>
    </div>
  )
}

export default CancelarButton;