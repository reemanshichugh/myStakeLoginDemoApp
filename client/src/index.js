import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes.js';
import './index.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './store';
import createHistory from 'history/createBrowserHistory'
// ReactDOM.render(<Routes />, document.getElementById('root'));
// registerServiceWorker();

const history = createHistory();
const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    {/*<ConnectedRouter history={history}>*/}
      <Routes />
    {/*</ConnectedRouter>*/}
</Provider>,
  document.getElementById("root")
);