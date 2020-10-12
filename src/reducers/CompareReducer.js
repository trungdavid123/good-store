import { ADD_COMPARE, REMOVE_COMPARE } from '../actions';

const s = JSON.parse(localStorage.getItem('compare'));

var initialState = s ? s : [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPARE:
      const itemIndex = state.findIndex((item) => item.webId == action.webId);
      if (state.length < 2 && itemIndex === -1) {
        JSON.stringify(localStorage.setItem(`compare${action.webId}`, true));

        return [...state, action.payload];
      }
      if (itemIndex > -1) {
        JSON.stringify(localStorage.setItem(`compare${action.webId}`, false));

        return state.filter((el) => el.webId !== action.webId);
      }
    case REMOVE_COMPARE:
      let itemIndex1 = state.findIndex((item) => item.webId == action.webId);
      JSON.stringify(localStorage.setItem(`compare${action.webId}`, false));

      if (itemIndex1 !== -1) {
        state.splice(action.index, 1);
        return [...state];
      }
    default:
      return state;
  }
};
