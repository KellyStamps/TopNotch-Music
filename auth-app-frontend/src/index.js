import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import albumReducer from './reducers/albumReducer';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
  users: userReducer,
  albums: albumReducer
});

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
