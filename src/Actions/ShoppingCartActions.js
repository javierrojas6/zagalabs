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

export const addProduct = (product, qty) => async (dispatch, store) => {
  try {
    var products = store().ShoppingCartReducer.products;
    var total = parseFloat(store().ShoppingCartReducer.total);

    products = Object.assign({}, products);

    if (!products[product.id]) {
      products[product.id] = product;
    } else {
      products[product.id].qty += qty;
    }

    total += parseFloat(product.price);

    dispatch({ type: ACTIONS.ADD_PRODUCT, payload: { products, total } });

    return { product, qty };
  } catch (error) {
    return error;
  }
};

export const removeProduct = product => async (dispatch, store) => {
  try {
    var products = store().ShoppingCartReducer.products;
    var total = parseFloat(store().ShoppingCartReducer.total);

    products = Object.assign({}, products);

    if (products[product.id] && products[product.id].qty - 1 < 1) {
      delete products[product.id];
    } else {
      products[product.id].qty--;
    }

    total -= parseFloat(product.price);

    dispatch({ type: ACTIONS.REMOVE_PRODUCT, payload: { products, total } });

    return { product };
  } catch (error) {
    return error;
  }
};

export const clean = () => async dispatch => {
  try {
    await ShoppingCart.clean();

    dispatch({ type: ACTIONS.CLEAN });

    return null;
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
