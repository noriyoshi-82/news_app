document.addEventListener('DOMCotenantLoaded', function(){
  var Timer = function(startTime, endTime, endMessage, outputDestination) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.endMessage = endMessage;
    this.outputDestination = outputDestination;
  };

  Timer.prototype.countDown = function(){
    var startTime = new Date(this.startTime);
    var endTime = new Date(this.endTime);
    var countDownTimer = document.getElementById(this.outputDestination);
    var endMessage = this.endMessage;
    var currentTimeCD;
    var untilStarTime;
    var oneDay = 24 * 60 * 1000;
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0; 
  }

  function calculateTime() {
    currentTimeCD = new Date();
    untilStarTime = startTime - currentTimeCD;
    untilFinishTime = endTime - currentTimeCD;

    if (currentTimeCD < startTime ) {
      d = Math.floor(untilStarTime / oneDay);
      h = Math.floor((untilStartTime % oneDay) / (60 * 60 * 1000));
      m = Math.floor((untilStartTime % oneDay) / (60 * 1000)) % 60;
      s = Math.floor((untilStartTime % oneDay) / 1000) % 60 % 60;
    } else {
      d = Math.floor(untilFinishTime / oneDay);
      h = Math.floor((untilFinishTime % oneDay) / (60 * 60 * 1000));
      m = Math.floor((untilFinishTime % oneDay) / (60 * 1000)) % 60;
      s = Math.floor((untilFinishTime % oneDay) / 1000) % 60 % 60;
    }
    showTime();
  }

  function showTime() {
    if (currentTimeCD < startTime) {
      countDownTimer.innerHTML
      = '開始まで' + d + '日' + h + '時間' + m + '分' + s + '秒';
    } else if { (currentTimeCD >= startTime && currentTimeCD <= endTime){
      currentTime.innerHTML
      = 'あと' + d + '日' + h + '時間' + m + '分' + s + '秒' + 'で終了';
    } else {
      countDownTimer.innerHTML = endMessage
    }

    }
  }
  setInterval(calculateTime, 1000);
  var myTimer = new Timer('2020/12/31 00:00:00', '2100/1/31 23:59:59', '終了!', 'timer');
  myTimer.countDown();


},false)