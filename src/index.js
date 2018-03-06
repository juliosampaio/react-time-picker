import React from 'react';
import ReactDOM from 'react-dom';
// import { polyfill } from 'mobile-drag-drop'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
