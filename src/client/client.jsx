import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/normalize';

import App from 'Client/components/App';

window.onload = () => render( (
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));