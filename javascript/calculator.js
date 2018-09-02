(function() {
  "use strict";

  var price = document.getElementById("price"),
      num = document.getElementById("num"),
      unit = document.getElementById("unit"),
      btn = document.getElementById("btn"),
      result = document.getElementById("result"),
      reset = document.getElementById("reset");

  function checkInput() {
    if (
      price.value.match(/^[1-9][0-9]*$/) !== null && //頭一桁は1-9の数字、それ以降（*）は0-9の数字の正規表現
      num.value.match(/^[1-9][0-9]*$/) !== null
    ) {
      btn.classList.remove("disabled"); //引数のクラスを除去する
    } else {
      btn.classList.add("disabled"); //引数のクラスを追加する
    }
  }

  btn.addEventListener("click", function() {
    //var payLess = 1000 / 3; //333.333...
    //var payLess = 1000 / 3 / 100; //3.333333...
    // var payLess = Math.floor(1000 / 3 / 100) * 100; //300
    // var short = 1000 - (300 * 3); //100
    // var payMore = Math.ceil(1000 / 3 /100) * 100; //400
    // var over = Math.abs(1000 - (400 * 3)); //-200
    if ( this.classList.contains("disabled") === true ) { //引数のクラスが存在する場合
      return;
    }
    var payLess, short, payMore, over, str;
    payLess = Math.floor(price.value / num.value / unit.value) * unit.value; //300 id名.valueでその要素の入力値を取得
    short = price.value - (payLess * num.value); //100
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value; //400
    over = Math.abs(price.value - (payMore * num.value)); //-200
    if ( short === 0 && over ===0 ) {
      str = "一人" + (price.value/num.value) + "円です。"
    } else {
      str =
        "一人" + payLess + "円の場合、" + short + "円が不足します。" +
        "一人" + payMore + "円の場合、" + over + "円が余ります。"
    }
    result.textContent = str;
    reset.classList.remove("hidden");

  });

  price.addEventListener("keyup", checkInput);
  num.addEventListener("keyup", checkInput);

  reset.addEventListener("click", function() {
    price.value = "";
    num.value = "";
    unit.value = 100;
    result.textContent = "結果表示欄";
    btn.classList.add("disabled");
    reset.classList.add("hidden");
    price.focus(); //priceがついている要素にカーソルを合わせる
  });

})();
