const apiKey = "d0187871451aac927c104f79db31f3f5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// const input = document.getElementById("search-bar");
// const button = document.getElementById("search-button");




const searchBox = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const respone = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (respone.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-box").style.display = "none";
    }
    else {

        var data = await respone.json();

        console.log(data);

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = (data.main.temp).toFixed(1) + " °C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = (data.wind.speed).toFixed(1) + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather-box").style.display = "block";
    }
}

searchBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {

        searchBtn.click(); 
    }

});

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})