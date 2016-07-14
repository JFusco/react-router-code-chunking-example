'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom';
import appRoutes from './routes/app.routes';

render((
  <Router history={browserHistory} routes={appRoutes} />
), document.getElementById('application'));
