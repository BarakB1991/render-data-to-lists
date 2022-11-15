import data from './data.json' assert { type: 'json' };
const colorsToDepth = [
  'rgb(173, 216, 230)',
  'rgb(135, 206, 250)',
  'rgb(176, 196, 222)',
  'rgb(255, 160, 122)',
  'rgb(214, 214, 214)',
];

document.getElementById('app').innerHTML = `
    ${createList(data)}
`;

function createList(data, depth = 0) {
  if (!data) return '';
  return data.map((i) => createElement(i, depth)).join('');
}

function createElement(item, depth) {
  const { id, name, url, subData } = item;
  return `
    <li>
      <ul style="background: ${getColorForDepth(depth)};">
      <li>Id:${id}</li>
      <li>Site Name:${name}</li>
      <li>
        <a href=https://${url} target=_blank>Site Url:${name}</a>
      </li>
     ${createList(subData, depth + 1)}
      </ul>
    </li>
    `;
}

function getColorForDepth(depth) {
  if (!colorsToDepth[depth]) {
    colorsToDepth[depth] = generateColor();
  }

  return colorsToDepth[depth];
}

function generateColor() {
  let r = randomInteger();
  let g = randomInteger();
  let b = randomInteger();
  return `rgb(${r}, ${g}, ${b})`;
}

function randomInteger() {
  return Math.floor(Math.random() * (255 - 120 + 1) + 130);
}
