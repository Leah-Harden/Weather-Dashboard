//api.openweathermap.org / data / 2.5 / forecast ? lat = { 28.5384 } & lon={ 81.3789 }& appid={API key }

var LatLon = ""
var Url = "https://api.openweathermap.org/data/2.5/forecast?" + LatLon + "&appid=" + '28c3589b9ea291ef8351565407890153&units=imperial',



$( document ).ready(function() {
//https://api.openweathermap.org/data/2.5/forecast?lat=28.5384&lon=-81.3789&appid=28c3589b9ea291ef8351565407890153&units=imperial
LatLon = 'lat=28.5384&lon=-81.3789'
fetch(Url, {
    method: 'POST'
})
    .then((response) => response.json())
    .then((data) => {

        $("#avgWind").text(data.list[0].wind.speed);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});


    $("#AtlantaBtn").click(function(){
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=33.753746&lon=--84.386330&appid=28c3589b9ea291ef8351565407890153&units=imperial', {
    method: 'POST'
})
    .then((response) => response.json())
    .then((data) => {

        $("#avgWind").text(data.list[0].wind.speed);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
  //  list.wind.speed