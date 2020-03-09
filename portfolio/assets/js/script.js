//Navigation slider
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links ul li");

  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
  });
};

//Animation on resize stopper
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

document.addEventListener("scroll", function(e) {
  var wScroll = window.pageYOffset + window.innerHeight;
  var portfolioSelector = document.querySelector("#portfolio");
  var top = portfolioSelector.offsetTop;
  var units = document.getElementsByClassName("thumb-unit");

  if (wScroll > top * 1.3) {
    for (i = 0; i < units.length; i++) {
      animateOnScroll(i);
    }
    function animateOnScroll(i) {
      setTimeout(function() {
        units[i].classList.add("is-showing");
      }, 150 * (i + 1));
    }
  }
});

textarea = document.querySelector("#textarea");
textarea.addEventListener("keydown", autoResize, false);

function autoResize() {
  var e = this;
  //Timeout is set to prevent overlapping of textarea text with label
  setTimeout(function() {
    e.style.cssText = "height:auto; padding:0";
    e.style.cssText = "height:" + e.scrollHeight + "px";
  }, 0);
}

// const mainText = document.querySelectorAll("#main-text path");

// //Calculating exact stroke length for animations
// for(let i = 0; i < mainText.length; i++) {
//     console.log(`Letter ${i} is ${mainText[i].getTotalLength()}`);

// }

navSlide();
