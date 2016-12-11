$(document).ready(function () {
  $("button#search").click(function () {
    var userInput = $("#get").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+userInput+"&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function (data) {
        for (var i = 0; i < data[1].length; i++) {
          
        }
      },
      error: function (error) {
        alert("Error! Please contact me so i could be able to fix error.");
      }
    });

  });
});
