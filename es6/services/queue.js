const { avg } = require('../utils.js');

const Queue = () => {
  const items = new Map();

  return {
    set: (element) => {
      const item = items.get(element.name);
      const elementMidPrice = avg(element.bestBid, element.bestAsk);

      if (item === undefined) element.midPrice = [elementMidPrice];
      else element.midPrice = item.midPrice.length === 30 ? [...item.midPrice.slice(1), elementMidPrice] : [...item.midPrice, elementMidPrice];

      return items.set(element.name, element);
    },
    getDataSorted: () => {
      return [...items.values()].sort((a, b) => b.lastChangeBid - a.lastChangeBid);
    },
  };
};

module.exports = Queue;
