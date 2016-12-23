$(document).ready(function () {
  var stream = "https://wind-bow.gomix.me/twitch-api/streams/";
  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  $("#all").click(function () {
    $("#everyone").html("");
    for (var i = 0; i < streamers.length; i++) {
      $("#everyone").prepend("<li>"+streamers[i]+"</li>");
      console.log(streamers[i]);
    }
  });
});
