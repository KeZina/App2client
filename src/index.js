import React from 'react';
import ReactDOM from 'react-dom';
import "./SCSS/index.scss"
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
