import {
  SEARCH,
  SET_RECOMMEND,
  SET_NEW,
  LOWEST_PRICE,
  HIGHEST_PRICE,
  TOP_SALES,
  HUNDTO300,
  THREETO500,
  FIVETO1000,
  THOUTO10000,
  LATEST_CLICK,
} from '../actions';

let initialState = {
  value: '',
  isRecommend: false,
  isNew: false,
  lowestPrice: false,
  highestPrice: false,
  latest: false,
  topSales: false,
  hundTo300: false,
  threeto500: false,
  fiveTo1000: false,
  thouTo10000: false,
  resetState: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, value: action.payload };
    case SET_NEW:
      return {
        ...state,
        isRecommend: false,
        isNew: true,
        lowestPrice: false,
        highestPrice: false,
        latest: false,
        topSales: false,
        hundTo300: false,
        resetState: false,
        threeto500: false,
        fiveTo1000: false,
        thouTo10000: false,
      };
    case LOWEST_PRICE:
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: true,
        highestPrice: false,
        latest: false,
        topSales: false,
        hundTo300: false,
        threeto500: false,
        fiveTo1000: false,
        resetState: false,

        thouTo10000: false,
      };

    case SET_RECOMMEND:
      return {
        ...state,
        isRecommend: true,
        isNew: false,
        lowestPrice: false,
        highestPrice: false,
        latest: false,
        topSales: false,
        hundTo300: false,
        threeto500: false,
        resetState: false,

        fiveTo1000: false,
        thouTo10000: false,
      };
    case HIGHEST_PRICE:
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: false,
        highestPrice: true,
        latest: false,
        topSales: false,
        hundTo300: false,
        threeto500: false,
        resetState: false,

        fiveTo1000: false,
        thouTo10000: false,
      };
    case TOP_SALES:
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: false,
        highestPrice: false,
        latest: false,
        topSales: true,
        hundTo300: false,
        resetState: false,

        threeto500: false,
        fiveTo1000: false,
        thouTo10000: false,
      };
    case LATEST_CLICK:
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: false,
        highestPrice: false,
        latest: true,
        topSales: false,
        hundTo300: false,
        threeto500: false,
        resetState: false,

        fiveTo1000: false,
        thouTo10000: false,
      };
    case HUNDTO300:
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: false,
        highestPrice: false,
        latest: false,
        topSales: false,
        hundTo300: true,
        threeto500: false,
        fiveTo1000: false,
        resetState: false,

        thouTo10000: false,
      };
    case THREETO500:
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: false,
        highestPrice: false,
        latest: false,
        topSales: false,
        hundTo300: false,
        threeto500: true,
        fiveTo1000: false,
        thouTo10000: false,
        resetState: false,
      };
    case FIVETO1000:
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: false,
        highestPrice: false,
        latest: false,
        topSales: false,
        hundTo300: false,
        threeto500: false,
        fiveTo1000: true,
        thouTo10000: false,
        resetState: false,
      };
    case THOUTO10000:
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: false,
        highestPrice: false,
        latest: false,
        topSales: false,
        hundTo300: false,
        threeto500: false,
        fiveTo1000: false,
        thouTo10000: true,
        resetState: false,
      };
    case 'RESET_STATE':
      return {
        ...state,
        isRecommend: false,
        isNew: false,
        lowestPrice: false,
        highestPrice: false,
        latest: false,
        topSales: false,
        hundTo300: false,
        threeto500: false,
        fiveTo1000: false,
        thouTo10000: false,
        resetState: true,
      };
    default:
      return state;
  }
};
