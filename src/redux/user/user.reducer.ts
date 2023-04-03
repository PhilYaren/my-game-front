import {AUTH_USER, LOGOUT_USER} from '../types';

const initialState: any = {
  user: null,
};


export const UserReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      return { ...state, user: payload };

    case LOGOUT_USER:
      return { ...state, user: payload }
  default:
    return state;
  }

}
