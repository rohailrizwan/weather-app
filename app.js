
function setweatherkar() {
    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            console.log(data)
            let weather_img_kar = document.getElementById("weather-img-kar")
            let karTemp = document.getElementById("karTemp")
            karTemp.innerHTML = data.main.temp + "°C"

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_img_kar.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_img_kar.src = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_img_kar.src = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_img_kar.src = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_img_kar.src = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_img_kar.src = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_img_kar.src = "./images/thunderstorm.png";
            }

        })
}
setweatherkar()

function setweatherlah() {
    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            console.log(data)
            let weather_img_lah = document.getElementById("weather-img-lah")
            let lahoreTemp = document.getElementById("lahoreTemp")
            lahoreTemp.innerHTML = data.main.temp + "°C"

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_img_lah.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_img_lah.src = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_img_lah.src = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_img_lah.src = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_img_lah.src = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_img_lah.src = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_img_lah.src = "./images/thunderstorm.png";
            }

        })
}
setweatherlah()

function setweathermel() {
    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            console.log(data)
            let weather_img_mel = document.getElementById("weather-img-mel")
            let MelTemp = document.getElementById("MelTemp")
            MelTemp.innerHTML = data.main.temp + "°C"

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_img_mel.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_img_mel.src = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_img_mel.src = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_img_mel.src = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_img_mel.src = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_img_mel.src = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_img_mel.src = "./images/thunderstorm.png";
            }

        })
}
setweathermel()

function setweatherLondon() {
    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            console.log(data)
            let weather_img_lon = document.getElementById("weather-img-lon")
            let londonTemp = document.getElementById("londonTemp")
            londonTemp.innerHTML = data.main.temp + "°C"

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_img_lon.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_img_lon.src = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_img_lon.src = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_img_lon.src = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_img_lon.src = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_img_lon.src = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_img_lon.src = "./images/thunderstorm.png";
            }

        })
}
setweatherLondon()

function setweatherWST() {
    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=washington&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            console.log(data)
            let weather_img_wst = document.getElementById("weather-img-wst")
            let wstTemp = document.getElementById("wstTemp")
            wstTemp.innerHTML = data.main.temp + "°C"

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_img_wst.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_img_wst.src = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_img_wst.src = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_img_wst.src = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_img_wst.src = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_img_wst.src = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_img_lon.src = "./images/thunderstorm.png";
            }

        })
}
setweatherWST()

function setweathersydney() {
    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            console.log(data)
            let weather_img_sydney = document.getElementById("weather-img-sydney")
            let sydneyTemp = document.getElementById("sydneyTemp")
            sydneyTemp.innerHTML = data.main.temp + "°C"

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_img_sydney.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_img_sydney.src = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_img_sydney.src = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_img_sydney.src = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_img_sydney.src = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_img_sydney.src = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_img_lon.src = "./images/thunderstorm.png";
            }

        })
}
setweathersydney()

let searchbtn = document.getElementById("searchbtn")
let searchcity = document.getElementById("searchcity")
function setweather() {
    let forcast = document.getElementById("forcast")
    forcast.style.display = "block"
   

    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchcity.value}&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res => res.json()))
        .then((res) => {
            data = res
            console.log(data)
            let cityname = document.getElementById("cityname")
            cityname.innerHTML = searchcity.value

            let temperature = document.getElementById("temperature")
            temperature.innerHTML = data.main.temp + "°C"


            let humidity = document.getElementById("cityhumidity")
            humidity.innerHTML = data.main.humidity + "%"

            let windspeed = document.getElementById("windspeed")
            windspeed.innerHTML = data.wind.speed + "km/h"

            let weather_image = document.getElementById("weather-image")

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_image.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_image.src = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_image.src = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_image.src = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_image.src = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_image.src = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_image.src = "./images/thunderstorm.png";
            }

        })
    

showweather()
}
searchbtn.addEventListener("click", setweather)

function showweather(){
    let displayweather = document.getElementById("displayweather")
    let set_image = document.getElementById("set_image")
    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchcity.value}&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res => res.json()))
        .then((res) => {
            data = res
            console.log(data)
            let citytemp=data.main.temp
            console.log(citytemp)
            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                set_image = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                set_image = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                set_image = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                set_image = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                set_image = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                set_image = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                set_image = "./images/thunderstorm.png"
            }

            displayweather.innerHTML += `
        <div class="col-md-4 col-lg-4 col-sm-6 col-12">
        <div class=" text-center rounded-2" id="yoursearch" onclick="recentsearch('${searchcity.value}')">
        <h6 class="pt-3"  >${searchcity.value}</h6>
        <img src="${set_image}" alt="" id="set_image" class="img-fluid pb-2 w-25">
        <p  class=" pb-2">${citytemp}</p>
    </div>      
          </div>
         `
        
})
}

let clear_input=document.getElementById("clear")
function clear(){
    
    searchcity.value=""
}
clear_input.addEventListener("click", clear)



function recentsearch(x){
    let forcast = document.getElementById("forcast")
    forcast.style.display = "block"
   
    // console.log(x)
    let data
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
    )
        .then((res => res.json()))
        .then((res) => {
            data = res
            // console.log(getcity)
            let cityname = document.getElementById("cityname")
            cityname.innerHTML = x

            let temperature = document.getElementById("temperature")
            temperature.innerHTML = data.main.temp + "°C"


            let humidity = document.getElementById("cityhumidity")
            humidity.innerHTML = data.main.humidity + "%"

            let windspeed = document.getElementById("windspeed")
            windspeed.innerHTML = data.wind.speed + "km/h"

            let weather_image = document.getElementById("weather-image")

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_image.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_image.src = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_image.src = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_image.src = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_image.src = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_image.src = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_image.src = "./images/thunderstorm.png";
            }

        })
    
}

