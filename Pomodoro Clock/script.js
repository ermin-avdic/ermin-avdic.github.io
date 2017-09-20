var len = document.querySelector(".brln .length");
var plus = document.querySelector(".brln .plus");
var minus = document.querySelector(".brln .minus");
var ssLen = document.querySelector(".ssln .length");
var ssPlus = document.querySelector(".ssln .plus");
var ssMinus = document.querySelector(".ssln .minus");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var timer = document.querySelector(".timer");
var timerp = document.querySelector("#timerp");
var numLength = Number(len.innerHTML);
var ssNumLength = Number(ssLen.innerHTML);
var br = 0;
var ss = 1;
var i = 0;

minutes.innerHTML = ssNumLength;

timer.addEventListener("click", function() {
  i++;
  if (i % 2 != 0) {
    minutes.innerHTML -= 1;
    seconds.innerHTML = 59;
    setInterval(function() {
      if (seconds.innerHTML > 0) {
        seconds.innerHTML -= 1;
      } else if (minutes.innerHTML == 0 && seconds.innerHTML == 0) {
          if (br < ss) {
            minutes.innerHTML = numLength - 1;
            seconds.innerHTML = 59;
            timerp.textContent = "Break";
            br++;
          } else if (br == ss) {
            minutes.innerHTML = ssNumLength - 1;
            seconds.innerHTML = 59;
            timerp.textContent = "Session"
            ss++;
          }
      } else if (seconds.innerHTML == 0) {
          minutes.innerHTML -= 1;
          seconds.innerHTML = 59;
      }
    }, 1000);
  } else {
    window.location.reload(true);
  }
});

plus.addEventListener("click", function() {
  numLength += 1;
  len.innerHTML = Number(numLength);
});

minus.addEventListener("click", function() {
  if (len.innerHTML > 1) {
    numLength -= 1;
    len.innerHTML = Number(numLength);
  }
});

ssPlus.addEventListener("click", function() {
  ssNumLength += 1;
  ssLen.innerHTML = ssNumLength;
  minutes.innerHTML = Number(ssNumLength);
});

ssMinus.addEventListener("click", function() {
  if (ssLen.innerHTML > 1) {
    ssNumLength -= 1;
    ssLen.innerHTML = ssNumLength;
    minutes.innerHTML = Number(ssNumLength);
  }
});
