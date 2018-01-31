import * as constants from '../constants/ActionTypes';
import Config from '../config/Config';

/**
 * API Middleware for sportpursuit api service.
 * After call we set state for reducers and put items to store
 *
 * @param store
 */
const apiMiddleware = store => next => (action) => {
  switch (action.type) {
    case constants.GET_HOME:
      store.dispatch({ type: constants.GET_HOME_LOADING });
      fetch(Config.api('home'))
        .then(response => response.json())
        .then(data => next({
          type: constants.GET_HOME_RECEIVED,
          data,
        }))
        .catch(error => next({
          type: constants.GET_HOME_ERROR,
          error,
        }));
      break;
    case constants.GET_BEST_SELLERS:
      store.dispatch({ type: constants.GET_BEST_SELLERS_LOADING });
      fetch(Config.api('bestSellers'))
        .then(response => response.json())
        .then(data => next({
          type: constants.GET_BEST_SELLERS_RECEIVED,
          data,
        }))
        .catch(error => next({
          type: constants.GET_BEST_SELLERS_ERROR,
          error,
        }));
      break;
    case constants.GET_MENU:
      store.dispatch({ type: constants.GET_MENU_LOADING });
      fetch(Config.api('menu'))
        .then(response => response.json())
        .then(data => next({
          type: constants.GET_MENU_RECEIVED,
          data,
        }))
        .catch(error => next({
          type: constants.GET_MENU_ERROR,
          error,
        }));
      break;
    default:
      break;
  }
};

export default apiMiddleware;
