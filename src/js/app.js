import { GridGame } from "./game";

window.addEventListener('DOMContentLoaded', () => {
  let gameGridWrapper = document.querySelector('.grid__wrapper');
  window.game = new GridGame(gameGridWrapper);
  game.generateGrid();
  game.startGame();
})



console.log("app.js included");
