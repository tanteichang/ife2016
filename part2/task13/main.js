(function() {

  const updateAqi = function () {
    const aqiDisplay = document.querySelector('#aqi-display');
    const aqi = document.querySelector('#aqi-input').value;
    if (isNaN(aqi) || aqi < 0) {
      aqiDisplay.innerHTML = '请输入有效的 AQI';
    } else {
      aqiDisplay.innerHTML = aqi;
    }
  }
  const aqiBtn = document.querySelector('#button');
  aqiBtn.addEventListener('click',updateAqi );

})();
