import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';

import * as FullStory from '@fullstory/browser';

/* PLEASE PROVIDE A ORGID TO MAKE IT WORK */
FullStory.init({ orgId: 'XXXX' });

FullStory.identify('AAAA');

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
