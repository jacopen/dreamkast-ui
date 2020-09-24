import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tracks from './components/Tracks';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Tracks />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<Footer />, document.getElementById("footer"));

serviceWorker.unregister();
