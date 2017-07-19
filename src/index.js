import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutesMap from './routes';
import registerServiceWorker from './registerServiceWorker';
	

ReactDOM.render(
	
	 <RoutesMap/>
	, document.getElementById('root'));
registerServiceWorker();

// Hot Module Replacement API


if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root'));

   
  })
}