class Queue {
  constructor() {
    this.queue = [];
  }
  enLQueue(item) {
    this.queue.unshift(item);
  }
  enRQueue(item) {
    this.queue.push(item);
  }
  deLQueue() {
    return this.queue.shift();
  }
  deRQueue() {
    return this.queue.pop();
  }
  isQueueEmpty() {
    return this.queue.length;
  }
  delQueueItem(index) {
    this.queue.splice(index, 1);
  }
  getQueue() {
    return this.queue;
  }
}
const lEn = document.querySelector('#lEn');
const rEn = document.querySelector('#rEn');
const lDe = document.querySelector('#lDe');
const rDe = document.querySelector('#rDe');
const btns = document.querySelector('.btns');
const numWrapper = document.querySelector('.num-wrapper');

let queue = new Queue();

function BtnHandler(e) {
  const inputData = document.querySelector('#input-data');
  const num = inputData.value.trim();
  if (isNaN(num) || !num) {
    alert('请输入数字');
    return;
  }
  switch (e.target.id) {
    case 'lEn':
      console.log('lEn');
      queue.enLQueue(num);
      break;
    case 'rEn':
      console.log('rEn');
      queue.enRQueue(num);
      break;
    case 'lDe':
      console.log('lDe');
      queue.deLQueue();
      break;
    case 'rDe':
      console.log('rDe');
      queue.deRQueue();
      break;
    default:
  }

  UpdateUI();
}
function UpdateUI() {
  let arr = queue.getQueue();
  numWrapper.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const el = document.createElement('span');
    el.innerHTML = arr[i];
    numWrapper.appendChild(el);
    el.setAttribute('data-index', i);
  }
}
function NumHandler(e) {
  if (e.target.nodeName === 'SPAN') {
    queue.delQueueItem(e.target.dataset.index);
    UpdateUI();
  }
}

function init() {
  btns.addEventListener('click', BtnHandler);
  numWrapper.addEventListener('click', NumHandler);
}

init();
