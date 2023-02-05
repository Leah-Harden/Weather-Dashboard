

var startUrl = "https://api.openweathermap.org/data/2.5/forecast?" ;
var appId = '&appid=28c3589b9ea291ef8351565407890153&units=imperial'



$(document).ready(function() {
    //https://api.openweathermap.org/data/2.5/forecast?lat=28.5384&lon=-81.3789&appid=28c3589b9ea291ef8351565407890153&units=imperial
    LatLon = 'lat=28.5384&lon=-81.3789';
    var Url = startUrl + LatLon + appId
    //var endpoint =
fetch(Url, {
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
        LatLon = 'lat=33.753746&lon=-84.386330';
        var Url = startUrl + LatLon + appId
        //'https://api.openweathermap.org/data/2.5/forecast?lat=33.753746&lon=--84.386330&appid=28c3589b9ea291ef8351565407890153&units=imperial'
        fetch(Url, {
})
    .then((response) => response.json())
    .then((data) => {


        $("#avgWind").text(data.list[0].wind.speed);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

$("#OrlandoBtn").click(function(){
    LatLon = 'lat=28.5384&lon=-81.3789';
    var Url = startUrl + LatLon + appId
    //'https://api.openweathermap.org/data/2.5/forecast?lat=33.753746&lon=--84.386330&appid=28c3589b9ea291ef8351565407890153&units=imperial'
    fetch(Url, {
})
.then((response) => response.json())
.then((data) => {


    $("#avgWind").text(data.list[0].wind.speed);
})
.catch((error) => {
    console.error('Error:', error);
});
});
