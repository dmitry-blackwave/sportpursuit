import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SportPursuit from './containers/SportPursuit';
import configureStore from './store/configureStore';
import * as constants from './constants/ActionTypes';

const store = configureStore({});
// store.dispatch({ type: constants.GET_MENU });
// store.dispatch({ type: constants.GET_BEST_SELLERS });
// store.dispatch({ type: constants.GET_HOME });

/**
 * Component for render application
 */
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SportPursuit/>
      </Provider>
    );
  }
}
