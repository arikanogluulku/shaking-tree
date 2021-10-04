import { START_SHAKE, STOP_SHAKE } from "./types";

const initialState = false;

export default function shakeReducer(state = initialState, action) {
  switch (action.type) {
    case START_SHAKE://tree begins to shake
      return true;

    case STOP_SHAKE://shake end tree fixed
      return false;

    default:
      return state;
  }
}
