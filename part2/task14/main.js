var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

(function () {

  /*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
  */
  const sortAqiData = aqiData.sort( (a,b) => {
    return b[1] - a[1];
  });

  function showAqiList(limit) {
    const aqiList = document.querySelector('#aqi-list');
    let num = 1;
    for (var i = 0; i < sortAqiData.length; i++) {
      if (sortAqiData[i][1] > limit) {
        const para = document.createElement('li');
        const textNode = `第${num++}名：${sortAqiData[i][0]} - ${sortAqiData[i][1]}`;
        const node = document.createTextNode(textNode);
        para.appendChild(node);
        aqiList.appendChild(para);
      }
    }
    num = 1;
  }

  showAqiList(60);

})();
