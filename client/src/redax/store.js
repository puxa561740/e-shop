import {
  createStore, 
  applyMiddleware, 
  combineReducers, 
  compose 
} from 'redux';
import thunk from 'redux-thunk';

import rootRedusers from './modules/index';

const confStore = (redusers = {}, preloaderState = {}, middlewares = []) => createStore(
  combineReducers({
    ...rootRedusers,
    ...redusers
  }),
  preloaderState,
  compose(
    applyMiddleware(
      ...middlewares,
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default confStore;