import { ACTIONS } from '../Actions/ProductActions';

const initialState = {
  products: [],
  selectedProduct: null
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};