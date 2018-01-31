import * as constants from '../constants/ActionTypes';

const initialState = {
  banners: {
    topBanner: [],
    featuredSales: [],
  },
  loading: false,
};

/**
 * Banner and Flash Sales Reducer
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function bannerTopSalesState(state = initialState, action) {
  switch (action.type) {
    case constants.GET_HOME_LOADING:
      return {
        loading: true,
        ...state,
      };
    case constants.GET_HOME_RECEIVED:
      return {
        loading: false,
        banners: action.data,
      };
    default:
      return state;
  }
}
