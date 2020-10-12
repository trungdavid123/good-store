import { ADD_WISH, REMOVE_WISH } from '../actions';

const s = JSON.parse(localStorage.getItem('wish'));

var initialState = s ? s : [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_WISH:
      const itemIndex = state.findIndex((item) => item.webId === action.webId);
      if (itemIndex !== -1) {
        return state.filter((item) => item.webId !== action.webId);
      } else {
        return [...state, action.payload];
      }
    case REMOVE_WISH:
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
};
