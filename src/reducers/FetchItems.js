import { FETCH_ITEM, SEARCH } from '../actions';

const initialState = {
  recommendItems: [],
  featuresItems: [],
  categoryItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      const { recommendItems, featuresItems, categoryItems } = action.payload;
      return { ...state, recommendItems, featuresItems, categoryItems };
    case SEARCH:
      return state;
    default:
      return state;
  }
};
