import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import apiMiddleware from '../middleware/ApiMiddleware';

const configureStore = (initialState: Object) => {
  const middleware = applyMiddleware(thunk, apiMiddleware);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
