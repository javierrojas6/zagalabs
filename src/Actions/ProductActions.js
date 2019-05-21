import { Product } from '../API/Product';

export const ACTIONS = {
  GET_PRODUCTS: 'product/get_products',
};

export const getProducts = category => async dispatch => {
  try {
    const response = await Product.getProducts(category);

    if (response.status === 200) {
      const { data } = response;

      dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
    }
    return response;
  } catch (error) {
    return error;
  }
};