$(document).ready(function() {
  var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  $("#all, #online, #offline").click(function() {
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
            $(".list").prepend("<li>"+lastword+"<a href='https://www.twitch.tv/"+lastword+"' target='_blank'> Twitch Link</a></li>");
          });
        } else if (streamsInfo.stream != null) {
          $("#online").click(function() {
            $(".list").prepend("<li id='"+streamsInfo.stream.channel.display_name+"'>"+streamsInfo.stream.channel.display_name+"<a href='"+streamsInfo.stream.channel.url+"' target='_blank'> Twitch Link</a></li>");
          });
        }
      }
    });
    const userList = usernames[i];
    $("#all").click(function() {
      $(".list").prepend("<li>"+userList+"<a href='https://www.twitch.tv/"+userList+"' target='_blank'> Twitch Link</a></li>");
    });

  }

  $(document).on("click", ".list, li", function() {
    $(".col-2").prepend("<h2>"+this.id+"</h2>");
  });

});
