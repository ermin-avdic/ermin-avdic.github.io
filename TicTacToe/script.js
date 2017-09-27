var choose = document.querySelector(".choose");
var cspan = document.querySelectorAll(".choose span");
var table = document.querySelector("table");
var td = document.querySelectorAll("td");
var ttt = "";
var button = document.querySelector("button");

for (var i = 0; i < cspan.length; i++) {
  cspan[i].addEventListener("click", function() {

    table.classList.remove("hidden");
    choose.classList.add("hidden");


    if (this.textContent === "X") {

      ttt = this.textContent;
      add();

    } else if (this.textContent === "O") {

      ttt = this.textContent;
      add();

    } else {
      console.log("Error!");
    }
  });
}

function add() {
  for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function() {
      this.textContent = ttt;
    });
  }
}

button.addEventListener("click", function(k) {
  let x = k.clientX;
  let y = k.clientY;

  let buttonTop = k.target.offsetTop;
  let buttonLeft = k.target.offsetLeft;

  let xInside = x - buttonLeft;
  let yInside = y - buttonTop;

  let circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = yInside + 'px';
  circle.style.left = xInside + 'px';

  this.appendChild(circle);
  setTimeout(() => {
    circle.remove();
    window.location.reload(true);
  }, 500);
});
