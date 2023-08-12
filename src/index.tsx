import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/Home';
import * as serviceWorker from './serviceworker.js';

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
serviceWorker.register();
