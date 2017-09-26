var choose = document.querySelector(".choose");
var cspan = document.querySelectorAll(".choose span");
var table = document.querySelector("table");
var td = document.querySelectorAll("td");
var ttt = "";

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
