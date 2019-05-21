import { ShoppingCart } from '../API/ShoppingCart';

export const ACTIONS = {
  ADD_PRODUCT: 'shopping_cart/add_product',
  REMOVE_PRODUCT: 'shopping_cart/add_product',
  GET_CURRENT: 'shopping_cart/get_current',
  CLEAN: 'shopping_cart/clear',
  CHECKOUT: 'shopping_cart/checkout',
};

export const addProduct = (product, qty) => async dispatch => {
  try {
    const response = await ShoppingCart.addProduct(product);

    if (response.status === 200) {
      dispatch({ type: ACTIONS.LOG_IN, payload: { product, qty } });
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const removeProduct = (product, qty) => async dispatch => {
  try {
    const response = await ShoppingCart.addProduct(product, qty);

    dispatch({ type: ACTIONS.REMOVE_PRODUCT });
    return response;
  } catch (error) {
    return error;
  }
};

export const clean = () => async dispatch => {
  try {
    const response = await ShoppingCart.clean();

    dispatch({ type: ACTIONS.CLEAN });
    return response;
  } catch (error) {
    return error;
  }
};

export const checkout = () => async dispatch => {
  try {
    const response = await ShoppingCart.checkout();

    dispatch({ type: ACTIONS.CHECKOUT });
    return response;
  } catch (error) {
    return error;
  }
};
