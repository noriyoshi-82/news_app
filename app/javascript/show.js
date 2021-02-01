window.addEventListener('load', function() {
  var Timer = function(startTime, endTime, endMessage, outputDestination) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.endMessage = endMessage;
    this.outputDestination = outputDestination;
  };

  Timer.prototype.countDown = function() {
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

    setInterval(calculateTime, 1000);
  

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
      } else if  (currentTimeCD >= startTime && currentTimeCD <= endTime){
        countDownTimer.innerHTML
        = 'あと' + d + '日' + h + '時間' + m + '分' + s + '秒' + 'で終了';
      } else {
        countDownTimer.innerHTML = endMessage;
      }

    }
  }
  var myTimer = new Timer('2021/02/01 00:00:00', '2021/04/18 23:59:59', '終了!', 'timer');
  myTimer.countDown();
});