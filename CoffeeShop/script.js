// var hamburger = document.getElementById('hamburger')
// var menuNav = document.getElementById('menu')
//
// hamburger.addEventListener("click", function() {
//   menuNav.classList.toggle("menu_width");
//     document.addEventListener("click", function(event) {
//       if (!event.target.closest("#menu") && !event.target.closest("#hamburger")) {
//         menuNav.classList.remove("menu_width");
//       }
//     });
// });
var checkList = document.getElementById("check-list-items");
var item = document.getElementsByClassName("item");
var menuItem = document.getElementsByClassName("menu-item");
var buttons = document.getElementsByClassName('price-button');

for (var j = 0; j < item.length; j++) {
  item[j].addEventListener("click", function() {
    // var node = document.createElement("LI");
    // var textnode = "";
    switch (this.id) {
      case "espresso":
        var node = document.createElement("li");
        node.innerHTML = "Espresso <span>&#36; 1.50</span>";
        checkList.appendChild(node);
        break;
      case "flat-white":
        var node = document.createElement("li");
        node.innerHTML = "Flat White <span>&#36; 2.00</span>";
        checkList.appendChild(node);
        break;
      case "macchiato":
        var node = document.createElement("li");
        node.innerHTML = "Macchiato <span>&#36; 2.00</span>";
        checkList.appendChild(node);
        break;
      case "capuccino":
        var node = document.createElement("li");
        node.innerHTML = "Capuccino <span>&#36; 2.50</span>";
        checkList.appendChild(node);
        break;
      case "latte":
        var node = document.createElement("li");
        node.innerHTML = "Latte <span>&#36; 2.50</span>";
        checkList.appendChild(node);
        break;
      case "hot-chocolate":
        var node = document.createElement("li");
        node.innerHTML = "Hot Chocolate <span>&#36; 3.00</span>";
        checkList.appendChild(node);
        break;
      case "tea":
        var node = document.createElement("li");
        node.innerHTML = "Tea <span>&#36; 1.50</span>";
        checkList.appendChild(node);
        break;
      default:
    console.log(textnode);
    }
  });
}

//Toggling active class on click
for (var i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu-item-active");
    current[0].className = current[0].className.replace(" menu-item-active", "");
    this.className += " menu-item-active";
  });
}

//Waves effect on button
Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createWavesEffect);
});

function createWavesEffect (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';

    circle.classList.add('waves-effect');
}
