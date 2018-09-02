(function() {
  "use strict";

  var rusult = document.getElementById("result"),
      start = document.getElementById("start"),
      stop = document.getElementById("stop"),
      reset = document.getElementById("reset");

  var startTime,
      elapsedTime = 0,
      tid,
      timeToAdd = 0,
      isRunning = false;

  function countUp() {
    tid = setTimeout(function() { //clearTimeout用に変数に入れる
      elapsedTime = Date.now() - startTime + timeToAdd;
      updateTimerText();
      countUp(); //関数自身を呼び出すことで繰り返しを実現
    }, 10);
  }

  function updateTimerText() {
    //135200 => 02:15.200
    // m = 135200 / 60000 の商
    // s = 135200 % 60000 / 1000
    // ms = 135200 % 1000
    var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = Math.floor(elapsedTime % 1000);

    // 3 => "03"
    // 12 => "12"
    // "0" + 3 => "03"
    // "0" + 12 => "012"
    // "00" + 4 => "004"
    // "00" + 56 => "0056
    m = ("0" + m).slice(-2); //末尾2桁を取得
    s = ("0" + s).slice(-2);
    ms = ("00" + ms).slice(-3);
    result.textContent = m + ":" + s + "." + ms;
  }

  function updateButtonState(startState, stopState, resetState) {
    start.className = startState ? "btn" : "btn disable";
    stop.className = stopState ? "btn" : "btn disable";
    reset.className = resetState ? "btn" : "btn disable";
  }

  start.addEventListener("click", function() {
    if (isRunning === false) {
      updateButtonState(false, true, true);
      isRunning = true;
      startTime = Date.now();
      countUp();
    }
  });

  stop.addEventListener("click", function() {
    if (isRunning === true) {
      updateButtonState(true, false, true);
      isRunning = false;
      clearTimeout(tid); //繰り返しをストップ
      timeToAdd += Date.now() - startTime; //次回start用に停止時間を保持
    }
  });

  reset.addEventListener("click", function() {
    updateButtonState(true, false, false);
    isRunning = false;
    clearTimeout(tid);
    elapsedTime = 0;
    timeToAdd = 0;
    updateTimerText();
  });

})();
