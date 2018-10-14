var temp;
var loc;
var APPID = "d2ace650b4df41f6d5f1ea94fc08da75";
var icon;
var humidity;
var wind;
var direction; 


function updateByZip(zip) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" + 
        "zip=" + zip + 
        "&APPID=" + APPID;
    sendRequest(url); 
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.icon = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.direction = data.wind.deg;
            weather.loc = data.name;
            weather.temp = data.main.temp;
            upodate(weather);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function update(weather) {
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
    icon.src = "imgs/codes/" + weather.icon + ".png";
    console.log("d", icon.src)
}



window.onload = function() {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

    var weather = {};
    weather.wind = 3.5;
    weather.direction = "N";
    weather.humidity = 35;
    weather.loc = "Boston";
    weather.temp = "45";
    weather.icon = 200;

    updateByZip(91101);
}