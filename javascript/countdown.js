(function() {
  "use strict";

  var min = document.getElementById("min"),
      sec = document.getElementById("sec"),
      reset = document.getElementById("reset"),
      start = document.getElementById("start"),
      result = document.getElementById("result");

  var startTime;
  var elapsedTime = 0;
  var timeLeft = 0;
  var timeToCountDown = 0;
  var tid;
  var isRunning = false;

  function countdown() {
    tid = setTimeout(function() {
      elapsedTime = Date.now() - startTime;
      timeLeft = timeToCountDown - elapsedTime;
      if (timeLeft < 0) {
        clearTimeout(tid);
        timeLeft = 0;
        timeToCountDown = 0;
        updateTimer(timeLeft);
        isRunning = false;
        start.textContent = "Start";
        return;
      }
      updateTimer(timeLeft);
      countdown();
    }, 10);
  }

  function updateTimer(t) {
    var d = new Date(t);
    var m = ("0" + d.getMinutes()).slice(-2); //現在時刻の分を取得
    var s = ("0" + d.getSeconds()).slice(-2); //現在時刻の秒を取得
    var ms = ("00" + d.getMilliseconds()).slice(-3); //現在時刻のミリ分を取得
    var timeString = m + ":" + s + "." + ms;
    result.textContent = timeString;
    document.title = timeString; //titleタグを操作
  }

  min.addEventListener("click", function() {
    if (isRunning === false) {
      timeToCountDown += 60 * 1000;
      if (timeToCountDown >= 60 * 60 * 1000) {
        timeToCountDown = 0;
      }
      updateTimer(timeToCountDown);
    }
  });

  sec.addEventListener("click", function() {
    if (isRunning === false) {
      timeToCountDown += 1000;
      if (timeToCountDown >= 60 * 60 * 1000) {
        timeToCountDown = 0;
      }
      updateTimer(timeToCountDown);
    }
  });

  reset.addEventListener("click", function() {
    startTime = 0;
    timeToCountDown = 0;
    timeLeft = 0;
    updateTimer(timeToCountDown);
    isRunning = false;
  });

  start.addEventListener("click", function() {
    if (isRunning === false) {
      isRunning = true;
      this.textContent = "Stop";
      startTime = Date.now();
      countdown();
    } else if (isRunning === true) {
      isRunning = false;
      this.textContent = "Start";
      timeToCountDown = timeLeft;
      clearTimeout(tid);
    }
  });

})();
