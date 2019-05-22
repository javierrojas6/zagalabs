import { ShoppingCart } from '../API/ShoppingCart';

export const ACTIONS = {
  ADD_PRODUCT: 'shopping_cart/add_product',
  REMOVE_PRODUCT: 'shopping_cart/add_product',
  CLEAN: 'shopping_cart/clear',
  CHECKOUT: 'shopping_cart/checkout',
};

export const STATES = {
  BUYING: 'buying',
  VALIDATING: 'validating',
  CHECKOUT: 'checkout'
};

export const addProduct = (product, qty) => async dispatch => {
  try {
    ShoppingCart.addProduct(product);

    dispatch({ type: ACTIONS.ADD_PRODUCT, payload: { product, qty } });
    return { product, qty };
  } catch (error) {
    return error;
  }
};

export const removeProduct = product => async dispatch => {
  try {
    ShoppingCart.removeProduct(product);

    dispatch({ type: ACTIONS.REMOVE_PRODUCT, payload: { product } });
    return { product };
  } catch (error) {
    return error;
  }
};

export const clean = () => async dispatch => {
  try {
    await ShoppingCart.clean();

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
