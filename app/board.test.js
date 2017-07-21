const Board = require('./board');

test("count live neighbours for the middle of the board", () => {
  board = new Board(
  [
    [0, 1, 0], // line 1
    [0, 1, 0], // line 2
    [0, 1, 0]
  ]);

  live = board.countLive(1, 1);
  expect(live).toBe(2);
});

test("count live neighbours at the edge the board", () => {
  board = new Board(
  [
    [0, 1, 0], // line 1
    [0, 1, 0], // line 2
    [0, 1, 0]
  ]);

  live = board.countLive(0, 1);
  expect(live).toBe(3);
});

test('next step for board', () => {
  board = new Board(
  [
    [0, 1, 0], // line 1
    [0, 1, 0], // line 2
    [0, 1, 0]
  ]);

  board.step();

  expect(board.rows).toEqual([
    [0, 0, 0], // line 1
    [1, 1, 1], // line 2
    [0, 0, 0]
  ])
});
