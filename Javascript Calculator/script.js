var input = document.querySelector("input");
var digits = document.querySelectorAll(".digits, .operator");
var ac = document.querySelector("#ac")
var square = document.querySelector("#square");
var equals = document.querySelector("#equals");
var backspace = document.querySelector("#backspace");

for (var i = 0; i < digits.length; i++) {
  digits[i].addEventListener("click", function() {
    input.value += this.innerHTML;
  });
}

ac.addEventListener("click", function() {
  input.value = "";
});

square.addEventListener("click", function() {
  input.value *= input.value;
});

backspace.addEventListener("click", function() {
  input.value = input.value.slice(0, -1)
});

equals.addEventListener("click", function() {
  var res = eval(input.value);
  input.value = res;
});
