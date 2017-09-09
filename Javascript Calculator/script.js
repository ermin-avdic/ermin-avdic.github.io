var input = document.querySelector("input");
var span = document.querySelectorAll("span");
var digits = document.querySelectorAll(".digits");
var operators = document.querySelectorAll(".operator");
var ac = document.querySelector("#ac")
var square = document.querySelector("#square");
var equals = document.querySelector("#equals");
var backspace = document.querySelector("#backspace");
var op = ["+", "*", "/"];

for (var i = 0; i < span.length; i++) {
  span[i].onclick = function() {
    var value = this.innerHTML;

    if (value === "AC") {
      input.value = "";
    } else if (value === "^2") {
      input.value *= input.value;
    } else if (value === '<i class="fa fa-arrow-left" aria-hidden="true"></i>') {
      input.value = input.value.slice(0, -1);
    } else if (value === "=") {
      input.value = eval(input.value);
    } else {
      var lastChar = input.value[input.value.length - 1];
    }

  }
}
