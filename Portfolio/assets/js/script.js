$(document).ready(function() {
  $(".button-collapse").sideNav();
  window.randomize = function() {
	$('#htmlProgress').attr('data-progress', 95);
  $('#cssProgress').attr('data-progress', 90);
  $('#javascriptProgress').attr('data-progress', 90);
  $('#nodejsProgress').attr('data-progress', 85);
}
  setTimeout(window.randomize, 200);
});
