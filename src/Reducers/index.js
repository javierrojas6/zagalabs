import { combineReducers } from 'redux';

import { UserReducer } from './UserReducer';
import { ProductReducer } from './ProductReducer';
import { ShoppingCartReducer } from './ShoppingCartReducer';

const rootReducer = combineReducers({
  UserReducer,
  ProductReducer,
  ShoppingCartReducer
});

export default rootReducer;