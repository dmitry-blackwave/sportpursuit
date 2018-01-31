import * as constants from '../constants/ActionTypes';

const initialState = {
  items: [],
  loading: false,
};

/**
 * Best Sellers Reducer
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function bestSellersState(state = initialState, action) {
  switch (action.type) {
    case constants.GET_BEST_SELLERS_LOADING:
      return {
        loading: true,
        ...state,
      };
    case constants.GET_BEST_SELLERS_RECEIVED:
      return {
        loading: false,
        items: action.data,
      };
    default:
      return state;
  }
}
