const row = () => document.createElement('tr');

const cell = (cellContent) => {
  const td = document.createElement('td');

  if (typeof cellContent === 'object') {
    Sparkline.draw(td, cellContent);
    return td;
  }

  td.innerHTML = cellContent;
  return td;
};

const renderData = (data) => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  data.map((item) => {
    const tr = row();
    tr.appendChild(cell(item.name));
    tr.appendChild(cell(item.bestBid));
    tr.appendChild(cell(item.bestAsk));
    tr.appendChild(cell(item.lastChangeBid));
    tr.appendChild(cell(item.lastChangeAsk));
    tr.appendChild(cell(item.midPrice));
    tbody.appendChild(tr);
  });
};

module.exports = renderData;
