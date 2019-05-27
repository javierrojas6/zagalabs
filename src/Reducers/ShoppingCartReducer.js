import { ACTIONS, STATES } from '../Actions/ShoppingCartActions';

const initialState = {
  products: {},
  state: STATES.BUYING,
  total: 0
};

export const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
    case ACTIONS.REMOVE_PRODUCT:
      return { ...state, ...action.payload };

    case ACTIONS.CLEAN:
      return {
        ...state,
        products: {},
        total: 0,
        state: STATES.BUYING
      }; 

    default:
      return state;
  }
};