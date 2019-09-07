import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './styles/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';


render(
  (
    <Router>
      <App />
    </Router>
  ), document.getElementById('root')
);
