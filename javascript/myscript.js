//コンソール出力
console.log("myscript");

//変数に格納
var msg = "Hello world",
      x = 10,
      y = -1.5;
console.log(msg);
console.log(x);
console.log(y);
console.log(x + y);
console.log(x *= 2);
// 短項目演算子はメソッド内で使えない？
x--;
console.log(x);

//文字列連結とエスケープ文字列
var y = "Yusuke";
var O = "Otani";
console.log("I\'m\n" + y + "\t" + O + ".");
var ss;
ss = "5" + 5;
console.log(ss);

//IF分岐
var score = 45;
if (score > 60) {
  console.log("合格点です");
} else if ( score > 40 ) {
  console.log("もうちょいです");
} else {
  console.log("だめです");
}

/*
真偽値
  文字列：空でなければtrue
  数値：0かNanでなければtrue
  true / false
  pbject：nullでなければtrue
  undifined, null：false
*/
var x = ""
if (x) {
  console.log("空ではありません")
} else {
  console.log("空です")
}

/*
  三項演算子
  以下２つの条件分は同じ意味になる
*/
var max, x=2, y=1;
if (x > y) {
  max = x;
  console.log(max)
} else {
  max = y;
  console.log(max)
}
max = (x > y) ? x : y;
console.log(max)

//switch文
var signal = "pink";
switch(signal) {
  case "red":
    console.log("stop!");
    break;
  case "green":
  case "blue":
    console.log("go!");
    break;
  case "yellow":
    console.log("slow down!");
    break;
  default:
    console.log("wrong argument!");
    break;
}

//while,do while文
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

var j = 5;
do {
  console.log(j);
  j++;
} while (j < 5);

//for文
for (var i = 0; i < 10; i++) {
  if ( i === 5 ) {
    continue;
  } else if ( i === 8 ) {
    break;
  }
  console.log(i);
}

//alert,confirm,prompt
alert("ダイアログボックスを表示する");
var result = confirm("確認ボックスを表示する。OKならtrue、キャンセルならfalse");
console.log(result);
var result = prompt("ユーザーに入力を求める", "第２引数でデフォルト値")
console.log(result);

//関数
function hello(arg) {
  return "こんにちは" + arg + "さん";
}
console.log(hello(result));

//無名関数,匿名関数（変数に保持された関数）
var hello = function(arg) {
  return "こんばんは" + arg + "さん";
};
console.log(hello(result));

//即時関数（呼び出しが不要な関数、変数のローカル化にも利用できる。）
(function hello(arg) { //関数名は省略可能
  console.log( "おはよう" + arg + "さん");
})(result);

/*
タイマー
setInterval：一定時間ごとに処理を繰り返す
setTimeout：一定時間後に処理を実行する
*/
var i = 0;
// function show() {
//   console.log(i++);
// }
// setInterval(function() {
//   show();
// }, 1000);

function show2() {
  console.log(i++);
  var tid = setTimeout(function() {
    show2();
  }, 1000)
  if (tid > 3) {
    clearTimeout(tid);
  }
}
show2();

//配列
var score = [100, 300, 500];
console.log(score);
console.log(score[2]);
score[2] = 199;
console.log(score[2]);

var score = [
  [100, 300, 500],
  [200, 400, 600]
];
console.log(score);
console.log(score[1][2]);

//オブジェクト（key,value）
var user = {
  email: "terun@gmail", //プロパティ
  score: 80,
  greet: function(name) { //メソッド
    console.log("こんにちは" + name + "さん" + "from" + this.email);
  }
};
console.log(d2);
console.log(user["email"]);
console.log(user.score);
user.greet(result);

//組み込みオブジェクト（String）
var s = new String("Yusuke");
console.log(s.length);
console.log(s.replace("u", "U")); //初めの文字しか置換してくれない
console.log(s.substr(3,6));


//組み込みオブジェクト（Array）
var a = new Array(100, 300, 200);
console.log(a);
console.log(a.length);
a.unshift(1);
console.log(a);
a.push(2);
console.log(a);
a.shift();
console.log(a);
a.pop();
console.log(a);
a.splice(1,2);
console.log(a);
a.splice(1,2, 111, 222);
console.log(a);

//組み込みオブジェクト（Math）
console.log(Math.PI); //円周率
console.log(Math.ceil(5.3)); //切り上げ
console.log(Math.floor(5.3)); //切り捨て
console.log(Math.round(5.3)); //四捨五入
console.log(Math.random()); //1-10の実数をランダムで返す

//組み込みオブジェクト（Date）
var d = new Date(); //現在日時の日付オブジェクトを作成
var d2 = new Date(2018, 7, 27, 23, 44, 00); //2018年8月27日23時44分00秒の日付オブジェクトを作成
console.log(d);
console.log(d2);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getTime()); //1970/1/1からの経過ミリ秒を返す

//DOM
//console.dir(window); //ブラウザのwindowオブジェクトを表示
//window.location.href = "" //指定したURLへ遷移する
//window.document //現在開いているページ（windowは省略可）
//DOM = Document Object Model

setTimeout(function() {
  var e = document.getElementById("msg"); //idがmsgのタグを取得
  e.textContent = "Olla!";
  e.style.color = "blue";
  e.className = "myStyle";
}, 1000)

document.getElementById("add").addEventListener("click", function() { //idに合致するタグがclickされたときにおこるeventを作成
  setTimeout(function() {
    var greet = document.createElement("p"), //要素を追加する
        text = document.createTextNode("追加されたpタグ");
        document.body.appendChild(greet).appendChild(text); //子要素を追加する
  }, 2000)
})
