import { Product } from '../API/Product';

export const ACTIONS = {
  GET_PRODUCTS: 'product/get_products',
};

export const getProducts = category => async dispatch => {
  try {
    const response = Product.getProducts(category);

    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: response });

    return response;
  } catch (error) {
    return error;
  }
};