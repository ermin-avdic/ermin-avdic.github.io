$(document).ready(function () {
  function wikipedia () {
    var userInput = $("#get").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+userInput+"&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function (data) {
        $("#results").html("");
        for (var i = 0; i < data[1].length; i++) {
          $("#results").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
        $("#get").val("");
      },
      error: function (error) {
        alert("Error! Please contact me so i could be able to fix error.");
      }
    });
  }
  $("#get").keypress(function () {
    if (event.which == 13) {
      wikipedia();
    }
  });
  $("#search").click(wikipedia);
});
