import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import VodContext from './Context/VodContext';
import useVod from './StatesApp/Vod';

const Index = () => {
  const [ vod , dispatch ] = useVod();
  return(
    <VodContext.Provider value = {{
      vod,
      dispatch
    }}>
      <App />
    </VodContext.Provider>
  )
}

ReactDOM.render( <Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
