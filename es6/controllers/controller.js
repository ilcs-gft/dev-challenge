const Queue = require('../services/queue.js');
const renderData = require('../components/fxPriceTable.js');

// Change this to get detailed logging from the stomp library
global.DEBUG = false;

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  const url = 'ws://localhost:8011/stomp';
  const client = Stomp.client(url);

  client.debug = function (msg) {
    if (global.DEBUG) {
      console.info(msg);
    }
  };

  const connectCb = () => {
    const queue = Queue();

    client.subscribe('/fx/prices', (res) => {
      if (res.body) {
        queue.set(JSON.parse(res.body));
        renderData(queue.getDataSorted());
      } else {
        alert('got empty message');
      }
    });
  };

  const errorCb = (err) => {
    alert(err);
  };

  client.connect({}, connectCb, errorCb);
});
