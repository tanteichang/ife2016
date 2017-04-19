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
  hasFull() {
    return this.queue.length >= 60 ? 1 : 0;
  }
}
const lEn = document.querySelector('#lEn');
const rEn = document.querySelector('#rEn');
const lDe = document.querySelector('#lDe');
const rDe = document.querySelector('#rDe');
const bubbleSortBtn = document.querySelector('#bubbleSort');
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
  if (!isRightful(num)) {
    alert('请输入10-100之间的数字');
    return;
  }
  if (queue.hasFull()) {
    alert('队列已满');
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
function bubbleSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[j]*1;
        arr[j] = arr[i]*1;
        arr[i] = temp;
        setTimeout(UpdateUI(), 500);
        console.log('update');
      }
    }
  }
  return arr;
}



function isRightful(num) {
  return num >= 10 && num <= 100 ? 1 : 0;
}

function UpdateUI() {
  let arr = queue.getQueue();
  numWrapper.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const el = document.createElement('span');
    el.innerHTML = arr[i];
    el.style.height = arr[i] + 'px';
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
  bubbleSortBtn.addEventListener('click', function(e) {
    bubbleSort(queue.getQueue());
  });
}

init();
