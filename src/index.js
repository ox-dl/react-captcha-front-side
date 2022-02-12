import React from 'react';
import ReactDOM from 'react-dom';
import Captcha from './components/Captcha';
import './sass/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Captcha />
  </React.StrictMode>,
  document.getElementById('root')
);