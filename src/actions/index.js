import jsonplaceholder from '../apis/jsonPlaceholder';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SIGN_IN = 'SIGN_IN';
export const ADD_COMPARE = 'ADD_COMPARE';
export const SIGN_OUT = 'SIGN_OUT';
export const INCREMENT = 'INCREMENT';
export const REMOVE_COMPARE = 'REMOVE_COMPARE';
export const DECREMENT = 'DECREMENT';
export const FETCH_ITEM = 'FETCH_ITEM';
export const SEARCH = 'SEARCH';
export const ADD_WISH = 'ADD_WISH';
export const REMOVE_WISH = 'REMOVE_WISH';
export const ADD_ALL = 'ADD_ALL';
export const SET_RECOMMEND = 'SET_RECOMMEND';
export const SET_NEW = 'SET_NEW ';
export const LOWEST_PRICE = 'LOWEST_PRICE';
export const HIGHEST_PRICE = 'HIGHEST_PRICE';
export const TOP_SALES = 'TOP_SALES';
export const LATEST_CLICK = 'LATEST_CLICK';
export const HUNDTO300 = 'HUNDTO300';
export const THREETO500 = 'THREETO500';
export const FIVETO1000 = 'FIVETO1000';
export const THOUTO10000 = 'THOUTO10000';
export const CHECK = 'CHECK';

export const renderedItems = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/featuresitems');

  dispatch({ type: FETCH_ITEM, payload: response.data[0].data[0] });
};

export const addItem = (item, webId, quantity) => {
  const action = {
    type: ADD_ITEM,
    payload: item,
    webId: webId,
    quantity: quantity,
  };
  return action;
};

export const check = (webId) => {
  return {
    type: CHECK,
    webId: webId,
  };
};

export const removeItem = (id) => {
  const action = {
    type: REMOVE_ITEM,
    payload: id,
  };
  return action;
};

export const signIn = () => async (dispatch) => {
  dispatch({ type: SIGN_IN });
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload: payload,
  };
};

export const addCompare = (payload, webId, i) => {
  return {
    type: ADD_COMPARE,
    payload: payload,
    webId: webId,
    i,
  };
};

export const removeCompare = (webId, index) => {
  return {
    type: REMOVE_COMPARE,
    webId: webId,
    index: index,
  };
};

export const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload: payload,
  };
};

export const addWish = (payload, webId) => {
  return {
    type: ADD_WISH,
    payload: payload,
    webId: webId,
  };
};

export const removeWish = (id) => {
  const action = {
    type: REMOVE_WISH,
    payload: id,
  };
  return action;
};

export const addAll = (item) => {
  return {
    type: ADD_ALL,
    payload: item,
  };
};

export const search = (value) => {
  return {
    type: SEARCH,
    payload: value,
  };
};

export const setRecommend = (payload) => {
  return {
    type: SET_RECOMMEND,
    payload: payload,
  };
};

export const setNew = (payload) => {
  return {
    type: SET_NEW,
    payload: payload,
  };
};
