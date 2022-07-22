const Queue = require('../es6/services/queue.js');

const queue = Queue();

const mockElement = {
  name: 'mockElement',
  bestBid: 106.7297012204255,
  bestAsk: 107.25199883791178,
  openBid: 107.22827132623534,
  openAsk: 109.78172867376465,
  lastChangeAsk: -4.862314256927661,
  lastChangeBid: -2.8769211401569663,
};

const mockElement2 = {
  name: 'mockElement2',
  bestBid: 106.7297012204255,
  bestAsk: 107.25199883791178,
  openBid: 107.22827132623534,
  openAsk: 109.78172867376465,
  lastChangeAsk: -4.862314256927661,
  lastChangeBid: 5.8769211401569663,
};

// mockArray initialized with expected sort of queue.getDataSorted()
const mockArray = [mockElement2, mockElement];

test('queue has two properties which are functions', () => {
  expect(queue).toEqual({ set: expect.any(Function), getDataSorted: expect.any(Function) });
});

test('queue set function returns the updated map with an object as value of entry with an added property which is an array', () => {
  expect(...queue.set(mockElement).values()).toEqual({
    name: expect.any(String),
    bestBid: expect.any(Number),
    bestAsk: expect.any(Number),
    openBid: expect.any(Number),
    openAsk: expect.any(Number),
    lastChangeAsk: expect.any(Number),
    lastChangeBid: expect.any(Number),
    midPrice: expect.any(Array),
  });
});

test('queue getDataSorted function returns an ordered array by lastChangeBid', () => {
  queue.set(mockElement);
  queue.set(mockElement2);
  expect(queue.getDataSorted()).toEqual(expect.arrayContaining(mockArray));
});
