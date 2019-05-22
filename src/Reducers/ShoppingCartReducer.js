import { ACTIONS, STATES } from '../Actions/ShoppingCartActions';

const initialState = {
  products: {},
  state: STATES.BUYING
};

export const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      const { qty } = action.payload;
      if (!state.products[action.payload.product.id]) {
        state.products[action.payload.product.id] = action.payload;
      } else {
        state.products[action.payload.product.id].qty += qty;
      }
      return state;

    case ACTIONS.REMOVE_PRODUCT:
      if (state.products[action.payload.product.id] && state.products[action.payload.product.id].qty - 1 < 1) {
        delete state.products[action.payload.product.id];
      } else {
        state.products[action.payload.product.id].qty--;
      }
      return state

    case ACTIONS.CLEAN:
      return {
        ...state,
        products: {},
        state: STATES.BUYING
      };

    default:
      return state;
  }
};