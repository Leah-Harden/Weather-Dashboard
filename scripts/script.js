

var startUrl = "https://api.openweathermap.org/data/2.5/forecast?" ;
var appId = '&appid=28c3589b9ea291ef8351565407890153&units=imperial'
var geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='
var appIdGeo ='&limit=1&appid=28c3589b9ea291ef8351565407890153'
var cityList = document.querySelector('#city-List');
const inpCity = document.getElementById("searchBar");
const city = inpCity.value;

document.querySelectorAll('button.blue, button.btn').forEach(button => {
    button.addEventListener("click", function () {
        searchCity(button.textContent);
    });
});


//orlando data
$(document).ready(function() { 
    $("#form").submit(function(event){
        event.preventDefault();
        var city = $("#searchBar").val()
        var cityTab = document.createElement('button');
        cityTab.classList = 'btn blue';
        cityTab.textContent = city 
        cityTab.addEventListener("click", function() {
            searchCity(city)
        });
        cityList.appendChild(cityTab);
        cityUrl = geoUrl + city + appIdGeo
        fetch( cityUrl, {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                var lat = data[0].lat
                var lon = data[0].lon
            var Url = startUrl + 'lat='+ lat +'&lon=' + lon + appId
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
});         
});
//orlando data



// button search
function searchCity(city) {
    //  var city = this.button.textContent
    cityUrl = geoUrl + city + appIdGeo
        fetch( cityUrl, {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                var lat = data[0].lat
                var lon = data[0].lon
                var Url = startUrl + 'lat='+ lat +'&lon=' + lon + appId
                    fetch(Url, {
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("is this working?")
                    fillingIn(data)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            });
        };
// button search

$( function() {
    var availableTags = [
        'Orlando',
        'Atlanta',
        'Denver',
        'Beijing',
        'New York',
        'Tokyo',
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

    $("#cityName").text(data.city.name);


    icon1 = data.list[0].weather[0].icon
    picIcon = "http://openweathermap.org/img/w/" + icon1 + ".png";
    $("#icon1, #icon0").attr('src', picIcon);

    $("#top-date, #date1").text(data.list[0].dt_txt) 
    $("#avgWind, #avgWind1").text(data.list[0].wind.speed);
    $("#avgTemp, #avgTemp1").text(data.list[0].main.temp);
    $("#avgHumi, #avgHumi1").text(data.list[0].main.humidity);

    icon2 = data.list[8].weather[0].icon
    picIcon = "http://openweathermap.org/img/w/" + icon2 + ".png";
    $("#icon2").attr('src', picIcon);
    $("#date2").text(data.list[8].dt_txt);
    $("#avgWind2").text(data.list[8].wind.speed);
    $("#avgTemp2").text(data.list[8].main.temp);
    $("#avgHumi2").text(data.list[8].main.humidity);

    icon3 = data.list[16].weather[0].icon
    picIcon = "http://openweathermap.org/img/w/" + icon3 + ".png";
    $("#icon3").attr('src', picIcon);
    $("#date3").text(data.list[16].dt_txt);
    $("#avgWind3").text(data.list[16].wind.speed);
    $("#avgTemp3").text(data.list[16].main.temp);
    $("#avgHumi3").text(data.list[16].main.humidity);

    icon4 = data.list[24].weather[0].icon
    picIcon = "http://openweathermap.org/img/w/" + icon4 + ".png";
    $("#icon4").attr('src', picIcon);
    $("#date4").text(data.list[24].dt_txt);
    $("#avgWind4").text(data.list[24].wind.speed);
    $("#avgTemp4").text(data.list[24].main.temp);
    $("#avgHumi4").text(data.list[24].main.humidity);
    
    icon5 = data.list[32].weather[0].icon
    picIcon = "http://openweathermap.org/img/w/" + icon5 + ".png";
    $("#icon5").attr('src', picIcon);
    $("#date5").text(data.list[32].dt_txt);
    $("#avgWind5").text(data.list[32].wind.speed);
    $("#avgTemp5").text(data.list[32].main.temp);
$("#avgHumi5").text(data.list[32].main.humidity);
    };
