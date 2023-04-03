import {SET_QUSTION_ANSWER, SET_GAMES} from "../types";

export const setGames = (data: any) => ({ type: SET_GAMES, payload: data });
export const setAnswer = (data: any) => ({ type: SET_QUSTION_ANSWER, payload: data });
