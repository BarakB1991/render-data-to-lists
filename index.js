import data from './data.json' assert { type: 'json' };
let ulChildrenCount = 0;

document.querySelector('.app').innerHTML = `
    ${createList(data)}
`;

function createList(data) {
  const items = data.map(createElement).join('');
  return `${items}`;
}

function createElement(item) {
  const { id, name, url, subData = null } = item;
  let subDataItem = [];

  if (subData) {
    ulChildrenCount++;
    subDataItem = `
    <li>
      <ul class="ul-no-style" style='background-color: ${colorRenderer()}'>
        ${createList(subData)}
      </ul>
    <li>
    `;
  }

  function colorRenderer(arg) {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return `
      <li>
        <ul style='background-color: ${colorRenderer()}'>
          <li>Id:${id}</li>
          <li>Site Name:${name}</li>
          <li>
            <a href='${url}' target=”_blank”>Site Url:${name}</a>
          </li>
          ${subDataItem}
        </ul>
      </li>
      
    `;
}
