import { ICONS } from "./constants";

const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

// toggleHighlighted('poop', false) => unhighlight

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;

  function buttonClick(event) {
    if (event.target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      //  ( 2 + 0 ) % 3 = 0
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (event.target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
