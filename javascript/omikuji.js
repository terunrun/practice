(function() {
  "use strict"; //厳密なエラーハンドリングを行う
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function() {
    // var n = Math.floor( Math.random() * 5);
    // var result;
    // switch (n) {
    //   case 0:
    //     result = "大吉";
    //     break;
    //   case 1:
    //     result = "吉";
    //     break;
    //   case 2:
    //     result = "小吉";
    //     break;
    //   case 3:
    //     result = "凶";
    //     break;
    //   case 4:
    //     result = "大凶";
    //     break;
    //   default:
    //     result = "エラー";
    //     break;
    // }
    // this.textContent = result + "です！";
    // var results = [ "大吉", "吉", "小吉", "凶", "大凶" ];
    // var n = Math.floor( Math.random() * results.length );
    // this.textContent = results[n] + "です！";
    var n = Math.random(); // 0以上1未満の数値をランダムで返すので、以下のようにすれば出る結果に偏りを持たせられる
    if ( n < 0.05 ) {
      this.textContent = "大吉です";
    } else if ( n < 0.2 ) {
      this.textContent = "吉です";
    } else {
      this.textContent = "凶です";
    }
  });

  btn.addEventListener("mousedown", function() {
    this.className = "mousedown";
  });

  btn.addEventListener("mouseup", function() {
    this.className = "";
  });
})();
