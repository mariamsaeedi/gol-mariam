const Board = require('./board');

test('next step for board', () => {
  board = new Board(
  [
    [0, 1, 0], // line 1
    [0, 1, 0], // line 2
    [0, 1, 0]
  ]);

  board.step();

  expect(board.rows).toBe([
    [0, 0, 0], // line 1
    [1, 1, 1], // line 2
    [0, 0, 0]
  ])
});
