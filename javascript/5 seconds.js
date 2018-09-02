(function() {
  "use strict";
  var start = document.getElementById("start"),
      stop = document.getElementById("stop"),
      result = document.getElementById("result"),
      startTime, //ゲーム開始時間
      isStarted = false; //ゲームが開始しているかフラグ

      start.addEventListener("click", function() {
        if ( isStarted === false ) {
          isStarted = true;
          result.textContent = "0.000seconds"; //前回結果のリセット
          result.className = "standby"; //前回coolだった場合のクラスリセット
          startTime = Date.now(); //startボタン押下時の時刻をミリ秒単位で取得
          this.className = "pushed";
          stop.className = ""; //startしているのでstopボタンの押し込み解除
        }
      });

      stop.addEventListener("click", function() {
        if ( isStarted === true ) {
          isStarted = false;
          this.className = "pushed";
          start.className = ""; //stopしているのでstopボタンの押し込み解除
          var elapsedTime, diff;
          elapsedTime = (Date.now() - startTime) / 1000; //stopボタン押下時の時刻からstartボタン押下時の時刻を引く
          diff = 5.000 - elapsedTime;
          // if ( diff > -1.000 && diff < 1.000 ) {
          if ( Math.abs(diff) < 1.000 ) { //開始時間と停止時間の差の絶対値を比較
            result.className = "cool";
          }
          result.textContent = elapsedTime.toFixed(3) + "seconds"; //小数点以下第3位で固定する
        }
      });

})();
