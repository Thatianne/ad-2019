import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'

ReactDOM.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <NotificationContainer />
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
