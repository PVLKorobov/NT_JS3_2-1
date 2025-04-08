/**
 * @jest-environment jsdom
 */

import { GridGame } from "./game";


beforeAll(() => {
  document.body.innerHTML = `
  <div class="contents__wrapper">
    <div class="grid__wrapper"></div>
  </div>
  `
  window.gridWrapper = document.querySelector('.grid__wrapper');
  window.game = new GridGame(gridWrapper);
  
  game.generateGrid();
});

describe("Тест перемещения img", () => {
  test.each([
    {x: 0, y: 1},
    {x: 3, y: 0},
    {x: 2, y: 2},
    {x: 2, y: 1}
  ])(`Moving to $x-$y`, ({x, y}) => {
    game.currentPos = {x: x, y: y};
    game.moveImgToCurrentPos();
    const targetImage = gridWrapper.querySelector(`.grid__slot__${x}-${y} .target__img`)
    expect(targetImage).not.toBeNull();
  })
});

describe("Тест выдачи случайных координат", () => {
  test('Current position is valid', () => {
    game.rollRandomPosition();
    expect(game.currentPos.x).not.toBeNull();
    expect(game.currentPos.y).not.toBeNull();
  })
});

describe("Тест запуска и остановки игры", () => {
  test('Game cycle started', () => {
    game.startGame();
    expect(game.gameCycleInterval).not.toBeNull();
  })

  test('Game cycle stopped', () => {
    game.stopGame();
    expect(game.gameCycleInterval).toBeNull();
  })
})

describe