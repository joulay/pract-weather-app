var temp;
var loc;
var icon;
var humidity;
var wind;
var direction; 






window.onload = function() {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

    update(weather);
}