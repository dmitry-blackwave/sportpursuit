import * as constants from '../constants/ActionTypes';

const initialState = {
  items: [],
  loading: false,
  isActiveParent: false,
  childList: [],
};

/**
 * Drawer Menu Reducer
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function menuState(state = initialState, action) {
  switch (action.type) {
    case constants.GET_MENU_LOADING:
      return {
        loading: true,
        isActiveParent: false,
        childList: [],
        ...state,
      };
    case constants.GET_MENU_RECEIVED:
      return {
        loading: false,
        isActiveParent: false,
        childList: [],
        items: action.data,
      };
    default:
      return state;
  }
}
