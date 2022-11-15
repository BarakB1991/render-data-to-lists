import data from './data.json' assert { type: 'json' };

let depth = 0;
let highestDepth = 0;

document.querySelector('.app').innerHTML = `
    ${createList(data)}
`;

function createList(data, removeDepth) {
  const items = data.map((i) => createElement(i)).join('');
  if (removeDepth) {
    depth--;
  }
  return `${items}`;
}

function createElement(item) {
  const { id, name, url, subData = null } = item; // id:1 name: "bar", url: "localhost:3000"
  let subDataItem = [];

  // check if need to create another list
  if (subData) {
    subDataItem = createSubDataList(subData);
  }
  console.log(depth);
  return `
    <li>
      <ul>
      <li>Id:${id}</li>
      <li>Site Name:${name}</li>
      <li>
        <a href=https://${url} target=_blank>Site Url:${name}</a>
      </li>
     ${subDataItem}
      </ul>
    </li>
    `;
}

function createSubDataList(subData) {
  depth++;

  if (highestDepth < depth) highestDepth++;

  return `
      <ul class="ul-no-style">
        ${createList(subData, true)}
      </ul>`;
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
}

// adding css style according to depth of nested ul elements
function addStyleToBody() {
  // adding first depth count
  //create the style element and appending it
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  head.appendChild(style);

  const twoUlElements = ' ul ul';

  // for every step into depth of ul inside node, add ul ul selectors
  for (let i = 0; i < highestDepth; i++) {
    style.innerHTML += `
  ul ul ul ul${twoUlElements.repeat(i)} {
    background-color: rgb(${randomRgbColor()})
  }`;
  }
}

console.log(highestDepth);
addStyleToBody();
