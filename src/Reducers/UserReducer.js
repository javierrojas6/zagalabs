import { ACTIONS } from '../Actions/UserActions';

const initialState = {
  isAutenticated: false,
  user: null
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOG_IN:
      return {
        ...state,
        isAutenticated: true,
        user: action.payload.user,
      };

    case ACTIONS.LOG_OUT:
      return {
        ...state,
        isAutenticated: false,
        user: null,
      };

    default:
      return state;
  }
};