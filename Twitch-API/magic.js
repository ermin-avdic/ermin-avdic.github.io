$(document).ready(function() {
  var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var streams = "https://wind-bow.glitch.me/streams/";

  $("#all").click(function() {
    $(".list").html("");
  });
  $("#online").click(function() {
    $(".list").html("");
  });
  $("#offline").click(function() {
    $(".list").html("");
  });

  for (var i = 0; i < usernames.length; i++) {
    var streamsList = "https://wind-bow.glitch.me/twitch-api/streams/"+usernames[i];
    $.ajax({
      type: "GET",
      url: streamsList,
      async: false,
      dataType: "jsonp",
      success: function(streamsInfo) {
        if (streamsInfo.stream === null) {
          var lastword = streamsInfo._links.channel.split("/").pop();
          $("#offline").click(function() {
            $(".list").prepend("<li>"+lastword+"</li>");
          });
        } else if (streamsInfo.stream != null) {
          $("#online").click(function() {
            $(".list").prepend("<li>"+streamsInfo.stream.channel.display_name+"</li>");
          });
        }
      }
    });
    const userList = usernames[i];
    $("#all").click(function() {
      $(".list").prepend("<li>"+userList+"</li>");
    });
  }

});
