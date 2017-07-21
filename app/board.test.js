const Board = require('./board');

test('makes an new board', () => {
  board = new Board([[false, false, false],
                     [false, false, false],
                     [false, false, false]]);

  expect(board.width()).toBe(3);
  expect(board.height()).toBe(3);
});

// test('sets a field', () => {
//   board = new Board([[false, false, false],
//                      [false, false, false],
//                      [false, false, false]]);

//   board.set(1, 1, true);
//   expect(board.fields[1][1]).toBe(true);
// });

// test('calculates the next state' () => {
//   TODO
// });
