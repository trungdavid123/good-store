import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import FetchItems from './FetchItems';
import AuthReducer from './AuthReducer';
import WishList from './WishReducer';
import SearchReducer from './SearchReducer';
import CompareReducer from './CompareReducer';

export default combineReducers({
  cartReducer: CartReducer,
  fetchItems: FetchItems,
  auth: AuthReducer,
  wish: WishList,
  search: SearchReducer,
  compare: CompareReducer,
});
