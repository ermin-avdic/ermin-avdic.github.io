var input = document.querySelector("input");
var digits = document.querySelectorAll(".digits");
var ac = document.querySelector("#ac")
var backspace = document.querySelector("#backspace");

for (var i = 0; i < digits.length; i++) {
  digits[i].addEventListener("click", function() {
    input.value += this.innerHTML;
  });
}
