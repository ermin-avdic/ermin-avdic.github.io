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
            element = "<li id='"+streamsInfo.stream.channel.display_name+"'>"+streamsInfo.stream.channel.display_name+"<a href='"+streamsInfo.stream.channel.url+"' target='_blank'> Twitch Link</a></li>";
            $(".list").append(element);
          });
        }
      }
    });
    const userList = usernames[i];
    $("#all").click(function() {
      $(".list").prepend("<li>"+userList+"<a href='https://www.twitch.tv/"+userList+"' target='_blank'> Twitch Link</a></li>");
    });
  }

  /*$(".list, li").click(function () {
    $(".col-2").html("");
    $(".col-2").prepend("<iframe src='http://player.twitch.tv/?channel=ESL_SC2' height='400' width='800' frameborder='0' scrolling='no' allowfullscreen='true'></iframe>");
    alert($(this).attr("id"));
  });*/

});
