var len = document.querySelector(".brln .length");
var plus = document.querySelector(".brln .plus");
var minus = document.querySelector(".brln .minus");
var ssLen = document.querySelector(".ssln .length");
var ssPlus = document.querySelector(".ssln .plus");
var ssMinus = document.querySelector(".ssln .minus");
var numLength = Number(len.innerHTML);
var ssNumLength = Number(ssLen.innerHTML);

plus.addEventListener("click", function() {
  numLength += 1;
  len.innerHTML = numLength;
});

minus.addEventListener("click", function() {
  if (len.innerHTML > 1) {
    numLength -= 1;
    len.innerHTML = numLength;
  }
});

ssPlus.addEventListener("click", function() {
  ssNumLength += 1;
  ssLen.innerHTML = ssNumLength;
});

ssMinus.addEventListener("click", function() {
  if (ssLen.innerHTML > 1) {
    ssNumLength -= 1;
    ssLen.innerHTML = ssNumLength;
  }
});
