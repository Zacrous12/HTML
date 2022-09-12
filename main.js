let total = 0

document.querySelector('.pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#mult').addEventListener('click', dub)
document.querySelector('#div').addEventListener('click', halve)
document.querySelector('.pumpkin').addEventListener('mouseenter', shader)
document.querySelector('.pumpkin').addEventListener('mouseout', antishader)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function dub() {
  total = total + total
  document.querySelector('#placeToPutResult').innerHTML = total
}

function halve() {
  total = total / .12
  document.querySelector('#placeToPutResult').innerHTML = total
}

function shader() {
  document.querySelector('li').style.boxShadow = '20px 20px 5px'
}

function antishader() {
  document.querySelector('li').style.boxShadow = 'none'
}


//To create an element in a DOM do this:

let newElm = document.createElement('div');

// Where you want it

document.body.appendChild(newElm);

// Creating many elements with DocumentFragment

let names = ['john', 'jack', 'kimmy', 'jennine'];

let nameList = document.querySelector('existing list')

let fragment = new DocumentFragment();

names.forEach((name) => {
  let li = document.createElement('li');
  li.innerHTML = name;
  fragment.appendChild(name);
})

nameList.appendChild(fragment);

// before() allows you to add things before an element

document.querySelector('top element').before(document.querySelector('new top element'))

// using .map you can append many elements

const things = document.querySelector('ul');

const strs = ['one', 'two', 'three'];

const items = strs.map((str) => {
  const item = document.createElement('li');
  item.innerText = str;
  return item;
});

things.firstChild.before(...items);

// ^^^ this method also works with after()

insertAdjacentHTML(positionName, text);

positionNames
  beforebegin = before Element
  afterbegin  = before elements first child
  beforeend = after the last child
  afterend = after the element

list.insertAdjacentHTML('beforebegin', '<p>stuff</p>')

// .map VS .forEach

.map creates a NEW Array
.forEach does not