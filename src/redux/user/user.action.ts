import { AUTH_USER } from "../types";

export const authUser = (user: any) => ({ type: AUTH_USER, payload: user })
export const logoutUser = (user: any) => ({ type: AUTH_USER, payload: user })
