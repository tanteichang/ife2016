/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

  const aqiCity = document.querySelector('#aqi-city-input').value.trim().replace(/\s/g,'');
  const aqiValue = document.querySelector('#aqi-value-input').value.trim().replace(/\s/g,'');

  if (!isNaN(aqiCity)) {
    alert('城市名称不能为空或数字');
  } else if (isNaN(aqiValue) || aqiValue < 0) {
    alert('空气质量指数必须为数字且大于0');
  } else if (aqiValue === '') {
    alert('空气质量指数不能为空');
  } else {
    aqiData[aqiCity] = aqiValue;
  }
  console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  const table = document.querySelector('#aqi-table');
  table.innerHTML = '';
  for (var item in aqiData) {
    if (table.children.length === 0) {
      table.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";
    }
    const el = document.createElement('tr');
    el.innerHTML = `<td>${item}</td><td>${aqiData[item]}</td><td><button>删除</button></td>`;
    table.appendChild(el)
  }

  // const delBtn = document.querySelectorAll('table button');
  // console.log(delBtn);
  // delBtn.forEach(item => item.addEventListener('click', function(e) {
  //   delBtnHandle(e);
  // }));

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
  const aqiCity = e.target.parentElement.parentElement.cells[0].innerText;
  delete aqiData[aqiCity];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  const addBtn = document.querySelector('#add-btn');
  addBtn.addEventListener('click', addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

  const table = document.querySelector('table');
  table.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "BUTTON") {
      delBtnHandle(e);
    }
  })
}

init();
