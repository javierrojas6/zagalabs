import { User } from '../API/User';

export const ACTIONS = {
  LOG_IN: 'user/log_in',
  LOG_OUT: 'user/log_out',
};

export const logIn = userData => async dispatch => {
  try {
    const response = await User.logIn(userData);

    let userProfile = {};

    if (response.status === 200) {
      dispatch({
        type: ACTIONS.LOG_IN,
        payload: userProfile,
      });
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const logOut = userData => async dispatch => {
  try {
     await User.logOut(userData);

    dispatch({ type: ACTIONS.logOut });
    return null;
  } catch (error) {
    return error;
  }
};
