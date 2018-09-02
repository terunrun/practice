(function() {
  "use strict";

  var comment = document.getElementById("comment"),
      label = document.getElementById("label"),
      LIMIT = 30, //定数は大文字で定義する
      WARNING = 10;

  label.innerHTML = LIMIT;

  comment.addEventListener("keyup", function() {
    var remaining = LIMIT - this.value.length;
    if (remaining < WARNING) {
      label.classList.add("warning");
    } else {
      label.classList.remove("warning");
    }
    // label.className = remaining < warning ? "warning" : "";
    label.innerHTML = remaining
  });

})();
