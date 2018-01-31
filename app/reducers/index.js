import { combineReducers } from 'redux';
import BestSellers from './BestSellers';
import BannerTopSales from './BannerTopSales';
import Menu from './Menu';
import * as constants from '../constants/ActionTypes';

export const makeState = state => ({
  bestSellers: state.BestSellers,
  banners: state.BannerTopSales,
  menu: state.Menu,
});

export const makeDispatch = dispatch => ({
  onGetHome: () => {
    const getHome = () => {
      return dispatch => {
        dispatch({ type: constants.GET_HOME });
      };
    };
    dispatch(getHome());
  },
  onGetMenu: () => {
    const getMenu = () => {
      return dispatch => {
        dispatch({ type: constants.GET_MENU });
      };
    };
    dispatch(getMenu());
  },
  onGetBestSellers: () => {
    const getBestSellers = () => {
      return dispatch => {
        dispatch({ type: constants.GET_BEST_SELLERS });
      };
    };
    dispatch(getBestSellers());
  },
});

export default combineReducers({
  BestSellers,
  BannerTopSales,
  Menu,
});
