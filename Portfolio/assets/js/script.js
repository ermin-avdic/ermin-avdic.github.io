$(document).ready(function() {
  $(".button-collapse").sideNav();
  window.randomize = function() {
	$('.ko-progress-circle').attr('data-progress', 95);
}
  setTimeout(window.randomize, 200);
});
