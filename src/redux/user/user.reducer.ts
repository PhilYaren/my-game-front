import { AUTH_USER, LOGOUT_USER } from '../types';

const initialState: any = {
  user: null,
  loaded: false,
};

export const UserReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      return { ...state, user: payload, loaded: true };

    case LOGOUT_USER:
      return { ...state, user: payload, loaded: true };
    default:
      return state;
  }
};
