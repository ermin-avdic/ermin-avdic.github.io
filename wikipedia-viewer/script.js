$(document).ready(function () {
  $("#get").click(function () {
    var userInput = $("#get").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+userInput+"&format=json&callback=?"
    console.log(api);
  });
});
