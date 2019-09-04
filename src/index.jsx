import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './styles/app.scss';
import { BrowserRouter } from 'react-router-dom';


render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root')
);

render(<App />, document.getElementById('root'));
