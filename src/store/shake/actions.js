import { START_SHAKE, STOP_SHAKE } from "./types";

const startShake = () => ({
  type: START_SHAKE,
});

const stopShake = () => ({
  type: STOP_SHAKE,
});

export { startShake, stopShake };
