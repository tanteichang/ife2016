
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  coding here
  */
  let data = [];

  const sources = document.querySelectorAll('#source li');
  sources.forEach( item => {
    const newItem = item.innerText.split('空气质量：');
    data.push([newItem[0], newItem[1]]);
  });
  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */
  return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
  return data.sort( (a, b) => {
    return a[1] - b[1];
  });
}

var data = getData();
console.log(sortAqiData(data));
/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
  const resort = document.querySelector('#resort');
  for (let i = 0; i < data.length; i++) {
    const para = document.createElement('li');
    para.innerHTML = `第${i+1}名：${data[i][0]}空气质量：<b>${data[i][1]}</b>`;
    resort.appendChild(para);
  }
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}


function init() {
  const sortBtn = document.querySelector('#sort-btn');
  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  sortBtn.addEventListener('click', btnHandle);
}

init();
