import gameState from "./gameState";

const TICK_RATE = 3000;

async function init() {
  console.log("starting game");

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
