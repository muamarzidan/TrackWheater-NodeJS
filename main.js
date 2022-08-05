const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');
// const backgroundImagerain = document.body.style.backgroundImage = 'url(img/rain.gif)';
// document.body.style.backgroundImage = 'url(img/mendung.jpg)';

searchButton.addEventListener('click', function() {
    function backgroundImage() {
        if (inputKeyword.value.response.main.temp >= 30) {
            return document.body.style.backgroundImage = 'url(img/cleargif.gif)';
        } else if (inputKeyword.value.response.main.temp <= 25) {
            return document.body.style.backgroundImage = 'url(img/raingif.gif)';
        }
    }

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputKeyword.value +"&appid=6f0b1403f99965066346e9142ce20053&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')
            console.log(result);

            const suhu = response.main.temp;
            const backgroundImage = document.body.style.backgroundImage;
            if (suhu >= 30.00 && suhu <= 40.00 ) {
                document.body.style.backgroundImage = 'url(img/cleargif.gif)';
            } else if (suhu >= 25.00 && suhu <= 30.00) {
                document.body.style.backgroundImage = 'url(img/raingif.gif)';
            }

            
            if(suhu >= 30.00 && suhu <= 40.00) {
                result.innerHTML = `<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>
                <img src=\"img/clear.svg" width=\"400px\" height=\"150px\">`
            } else if (suhu >= 25.00 && suhu <= 30.00) {
                result.innerHTML = `<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>
                <img src=\"img/cloud.svg" width=\"400px\" height=\"150px\">`
            } else if (suhu >= 20.00 && suhu <= 25.00) {
                result.innerHTML = `<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>
                <img src=\"img/rain.svg" width=\"400px\" height=\"150px\">`
            } else {
                result.innerHTML = `<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>
                <img src=\"img/storm.svg" width=\"400px\" height=\"150px\">`
            }
        });
    inputKeyword.value = null;

});
let carName = 'Kijang';

function displayCarName() {
  let carName = 'Honda';

  return 'Mobil ini bermerk ' + carName;
}

console.log(displayCarName());

// inputKey.addEventListener('click', function() {


// })