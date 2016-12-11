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
        console.log(data[1][0]);
        console.log(data[2][0]);
        console.log(data[3][0]);
      },
      error: function (error) {
        alert("Error");
      }
    });

  });
});
