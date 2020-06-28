import gameState from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("starting game");

  initButtons(gameState.handleUserAction);
  let nextTimeToTick = Date.now();

  // function inside function closure
  // closure to encapsulate nextTimeToTick
  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    // when idle run nextAnimationFrame.
    requestAnimationFrame(nextAnimationFrame);
  }
  // when idle  run nextAnimationFrame.
  requestAnimationFrame(nextAnimationFrame);
}

init();
