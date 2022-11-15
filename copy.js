import data from './data.json' assert { type: 'json' };
const colorsToDepth = ['red', 'green', 'blue', 'gray', 'purple'];

document.getElementById('app').innerHTML = `
    ${createList(data)}
`;

function createList(data, depth = 0) {
  if (!data) return '';
  return data.map((i) => createElement(i, depth)).join('');
}

function createElement(item, depth) {
  const { id, name, url, subData } = item;
  const color = 'red';
  return `
    <li>
      <ul style="background: ${colorsToDepth[depth]}">
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
  const colorsToDepth = [];
  if (!colorsToDepth[depth]) {
    colorsToDepth[depth] = generateColor();
  }

  return colorsToDepth;
}
