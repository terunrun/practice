(function() {
  "use strict";
  var slider = document.getElementById("slider"),
      label = document.getElementById("label"),
      numbers = document.getElementById("numbers"),
      symbols = document.getElementById("symbols"),
      btn = document.getElementById("btn"),
      result = document.getElementById("result");

      function getPassword() {
        var seed = "", //パスワード生成元文字列の箱を用意
            seed_letters = "abcdefghijklmnopqrstuvwxyz",
            seed_numbers = "0123456789",
            seed_symbols = "!#$%&()'",
            len = slider.value,
            pwd = "";

        seed = seed_letters + seed_letters.toUpperCase();

        if (numbers.checked === true) {　//numbersがチェックされている場合
          seed += seed_numbers;
        }
        if (symbols.checked) { //symbolsがチェックされている場合
          seed += seed_symbols;
        }

        for (var i = 0; i < len; i++ ) {
          pwd += seed[Math.floor(Math.random() * seed.length)]; //seedのランダム番目の文字をpwdに足す
        }

        // while (len--) { //lenから1文字減らして0になるまで次の処理を実行
        //   pwd += seed[Math.floor(Math.random() * seed.length)];
        // }

        result.value = pwd;
      };

      slider.addEventListener("change", function() {
        label.innerHTML = this.value; //textContentへ代入でも同様に動く
      });

      btn.addEventListener("click", function() {
        getPassword();
      });

      result.addEventListener("click", function() {
        this.select(); //全選択する
      });

      getPassword(); //画面表示時（js実行時）にパスワードを表示する
})();
