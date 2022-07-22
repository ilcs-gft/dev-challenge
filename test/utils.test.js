const { avg } = require('../es6/utils.js');

test('avg between 2 and 4 is expected to be 3', () => {
  expect(avg(2, 4)).toBe(3);
});
