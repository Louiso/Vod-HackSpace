import React, { useContext } from 'react';

import './App.scss';
import FaseGrabacion from './components/Fases/FaseGrabacion';
import Introduccion from './components/Fases/Introduccion';
import GridGrabacion from './components/Fases/GridGrabacion';
import "antd/dist/antd.css";
import HeaderKrowdy from './components/Krowdy/HeaderKrowdy';
import ContainerKrowdy from './components/Krowdy/ContainerKrowdy';
import VodContext from './Context/VodContext';

const App = () => {
  const { vod: { fase }, dispatch } = useContext(VodContext); 
  const getWindowContent = () => {
    const windowContent = [
      <Introduccion goFaseGrabacion = { () => dispatch({
        type: 'updateFase',
        fase: 1
      })}/>,
      <FaseGrabacion/>,
      <GridGrabacion/>
    ]
    return windowContent[fase];
  }
  return (
    <div className="krowdy">
      <HeaderKrowdy/>
      <ContainerKrowdy>
        { getWindowContent()  }
      </ContainerKrowdy>
    </div>
  )
}

export default App;
