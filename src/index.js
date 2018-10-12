import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/reset.css';

const API_URL = 'https://tagchatter.herokuapp.com';

ReactDOM.render(<App apiUrl={API_URL} />, document.querySelector('.wrapper'));
serviceWorker.unregister();
