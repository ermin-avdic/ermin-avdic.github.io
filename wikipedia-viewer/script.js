$(document).ready(function () {
  function wikipedia() {
    var userInput = $("input[name='search']").val();
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
        $("input[name='search']").val("");
      },
      error: function () {
        alert("Error! Please contact me")
      }
    });
  }

  $("#search").click(wikipedia);
  $("#get").keypress(function () {
    if (event.keyCode == 13) {
      event.preventDefault();
      wikipedia();
      $("input[name='search']").blur();
    }
  });
});
