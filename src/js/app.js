import { GridGame } from "./game";

window.addEventListener("DOMContentLoaded", () => {
  let gameGridWrapper = document.querySelector(".grid__wrapper");
  window.game = new GridGame(gameGridWrapper);
  window.game.generateGrid();
  window.game.startGame();
});
