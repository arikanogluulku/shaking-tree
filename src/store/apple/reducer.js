import { SET_APPLE_DROP, SET_BASKET, SET_APPLES, RESTART } from "./types";
import { apples } from "../../utils/apple";
const initialState = {
  apples,
  basket: [],
};

export default function appleReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_APPLE_DROP: //update on apple info for apples dropping from tree.
      return {
        ...state,
        apples: [
          ...state.apples.filter((item) => item.id !== payload.id),
          payload,
        ],
      };
    case SET_APPLES: //remove apple
      return {
        ...state,
        apples: [...state.apples.filter((item) => item.id !== payload)],
      };
    case SET_BASKET: //add apples to basket
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    case RESTART:
      return initialState;

    default:
      return state;
  }
}
