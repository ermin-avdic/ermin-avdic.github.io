$(document).ready(function(){

  var lat;
  var lon;
  $.getJSON("http://ip-api.com/json", function(data){
    console.log(data);
    lat = data.lat;
    lon = data.lon;

    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=cfeb6cd5a01b146aa5d3352c5edb05cf";

  $.getJSON(api, function(weatherData){
    $("#location").text(weatherData.name);
    $("#degrees").text(weatherData.main.temp + " K");
    $("#weather").text(weatherData.weather[0].main);
    $(".button").click(function () {
      if ($("#degrees").text() === weatherData.main.temp + " K") {
         $("#degrees").text(weatherData.main.temp - 273.15 + " °C");
         $(".button").text("Convert to Kelvin");
      } else {
        $("#degrees").text(weatherData.main.temp + " K");
        $(".button").text("Convert to Celsius");
      }
    });


    if (weatherData.weather[0].id >= 200 && weatherData.weather[0].id <= 232) {
      $("div#grmljavina").addClass("icon thunder-storm");
      $("div#oblak").addClass("cloud");
      $("div#munja").addClass("lightning");
      $("div#strijela").addClass("bolt");
      $("div#druga").addClass("bolt");
    } else if (weatherData.weather[0].id >= 300 && weatherData.weather[0].id <= 531) {
      $("div#kisa").addClass("icon rainy");
      $("div#lakob").addClass("cloud");
      $("div#saki").addClass("rain");
    } else if (weatherData.weather[0].id >= 600 && weatherData.weather[0].id <= 622) {
      $("div#snijeg").addClass("icon flurries");
      $("div#idk").addClass("cloud");
      $("div#something").addClass("snow");
      $("div#pahuljica").addClass("flake");
      $("div#second").addClass("flake");
    } else if (weatherData.weather[0].id >= 701 && weatherData.weather[0].id <= 781) {
      $("div#obl").addClass("icon cloudy");
      $("div#ob").addClass("cloud");
      $("div#ob").addClass("cloud");
    } else if (weatherData.weather[0].id === 800) {
      $("div#sunce").addClass("icon sunny");
      $("div#cisto").addClass("sun");
      $("div#zraka").addClass("rays");
    } else if (weatherData.weather[0].id >= 801 && weatherData.weather[0].id <= 804) {
      $("div#noclue").addClass("icon cloudy");
      $("div#nidea").addClass("cloud");
      $("div#nveze").addClass("cloud");
    } else {
      $("div#undefined").text("<h3>Undefined</h3>");
    }

  });

  });

 });
