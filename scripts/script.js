

var startUrl = "https://api.openweathermap.org/data/2.5/forecast?" ;
var appId = '&appid=28c3589b9ea291ef8351565407890153&units=imperial'
var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='
var appIdGeo ='&limit=1&appid=28c3589b9ea291ef8351565407890153'
const inpCity = document.getElementById("searchBar");
const city = inpCity.value;

$(document).ready(function() { 
    $("#form").submit(function(event){
        event.preventDefault();
        cityUrl = geoUrl + city + appIdGeo
        fetch( cityUrl, {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)

        });
        console.log('hello')

    });
});

//$( "#searchBar" ).submit(function( event ) {});










$( function() {
    var availableTags = [
        'Orlando'
    ];
    $( "#searchBar" ).autocomplete({
        source: availableTags
    });
});





$(document).ready(function() {
    //https://api.openweathermap.org/data/2.5/forecast?lat=28.5384&lon=-81.3789&appid=28c3589b9ea291ef8351565407890153&units=imperial
    LatLon = 'lat=28.5384&lon=-81.3789';
    var Url = startUrl + LatLon + appId
fetch(Url, {
})
    .then((response) => response.json())
    .then((data) => {
        fillingIn(data)
        
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });

function fillingIn(data){
    console.log(data)
    $("#top-date, #date1").text(data.list[0].dt_txt) 
    $("#avgWind, #avgWind1").text(data.list[0].wind.speed);
    $("#avgTemp, #avgTemp1").text(data.list[0].main.temp);
    $("#avgHumi, #avgHumi1").text(data.list[0].main.humidity);

    $("#date2").text(data.list[8].dt_txt);
    $("#avgWind2").text(data.list[8].wind.speed);
    $("#avgTemp2").text(data.list[8].main.temp);
    $("#avgHumi2").text(data.list[8].main.humidity);
    
    $("#date3").text(data.list[16].dt_txt);
    $("#avgWind3").text(data.list[16].wind.speed);
    $("#avgTemp3").text(data.list[16].main.temp);
    $("#avgHumi3").text(data.list[16].main.humidity);

    $("#date4").text(data.list[24].dt_txt);
    $("#avgWind4").text(data.list[24].wind.speed);
    $("#avgTemp4").text(data.list[24].main.temp);
    $("#avgHumi4").text(data.list[24].main.humidity);
    
    $("#date5").text(data.list[24].dt_txt);
    $("#avgWind5").text(data.list[24].wind.speed);
    $("#avgTemp5").text(data.list[24].main.temp);
$("#avgHumi5").text(data.list[24].main.humidity);
    };








    

    $("#AtlantaBtn").click(function(){
        LatLon = 'lat=33.753746&lon=-84.386330';
        var Url = startUrl + LatLon + appId
        fetch(Url, {
})
    .then((response) => response.json())
    .then((data) => {
        fillingIn(data)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

$("#DenverBtn").click(function(){
    LatLon = 'lat=39.742043&lon=-104.991531';
    var Url = startUrl + LatLon + appId
    fetch(Url, {
})
.then((response) => response.json())
.then((data) => {
    fillingIn(data)
})
.catch((error) => {
    console.error('Error:', error);
});
});

$("#BeijingBtn").click(function(){
    LatLon = 'lat=39.916668&lon=116.383331';
    var Url = startUrl + LatLon + appId
    fetch(Url, {
})
.then((response) => response.json())
.then((data) => {
    fillingIn(data)
})
.catch((error) => {
    console.error('Error:', error);
});
});

$("#OrlandoBtn").click(function(){
    LatLon = 'lat=28.5384&lon=-81.3789';
    var Url = startUrl + LatLon + appId
    fetch(Url, {
    })
    .then((response) => response.json())
    .then((data) => {
        fillingIn(data)
        
    })
.catch((error) => {
    console.error('Error:', error);
});
});
$("#NewYorkBtn").click(function(){
    LatLon = 'lat=40.712776&lon=-74.005974';
    var Url = startUrl + LatLon + appId
    fetch(Url, {
})
.then((response) => response.json())
.then((data) => {
    fillingIn(data)
})
.catch((error) => {
    console.error('Error:', error);
});
});

$("#TokyoBtn").click(function(){
    LatLon = 'lat=35.689487&lon=139.691711';
    var Url = startUrl + LatLon + appId
    fetch(Url, {
})
.then((response) => response.json())
.then((data) => {
    fillingIn(data)
})
.catch((error) => {
    console.error('Error:', error);
});
});

