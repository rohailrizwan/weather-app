function setcitiesweather() {
    let cities = ["karachi", "lahore", "melbourne", "sydney", "london", "washington"]

    for (i = 0; i < cities.length; i++) {
        let displaycity = cities[i]

        let data
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${displaycity}&appid=4fb3ea530ea91d0e1c04f26d9b759862&units=metric`
        )
            .then((res) => res.json())
            .then((res) => {
                data = res
                console.log(data)
                if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                    weather_img_cities = "./images/rainy-day.png"
                }
                else if (data.weather[0].main === "Clear") {
                    weather_img_cities = "./images/clear-sky.png";
                }
                else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                    weather_img_cities = "./images/cloudy.png";
                }
                else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                    weather_img_cities = "./images/sand.png";
                }
                else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                    weather_img_cities = "./images/smoke.png";
                }
                else if (data.weather[0].main === "Snow") {
                    weather_img_cities = "./images/snowflake.png";
                }
                else if (data.weather[0].main === "Thunderstorm") {
                    weather_img_cities = "./images/thunderstorm.png";
                }

                let showcities = document.getElementById("showcities")
                // let mycity = document.getElementById("mycity")
                let citiesTemp = data.main.temp + "°C"
                showcities.innerHTML += `
            <div class="col-md-2 col-lg-2 col-sm-12 col-6">
            <div class=" text-center rounded-2" id="setcities">
                <h6 class="pt-3">${displaycity}</h6>
                <img src="${weather_img_cities}" alt="" id="" class="img-fluid pb-2 w-25">
                <p  class=" pb-2">${citiesTemp}</p>
            </div>
        </div>
            `
            })
    }
    // console.log(cities)
}
setcitiesweather()

let searchbtn = document.getElementById("searchbtn")
let searchcity = document.getElementById("searchcity")

function setweather() {
    let forcast = document.getElementById("forcast")
    let set_image = document.getElementById("set_image")
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

            let settemp = data.main.temp + "°C"
            console.log(settemp)

            let temperature = document.getElementById("temperature")
            temperature.innerHTML = data.main.temp + "°C"


            let humidity = document.getElementById("cityhumidity")
            humidity.innerHTML = data.main.humidity + "%"

            let windspeed = document.getElementById("windspeed")
            windspeed.innerHTML = data.wind.speed + "km/h"

            let weather_image = document.getElementById("weather-image")

            if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                weather_image.src = "./images/rainy-day.png"
                set_image.src = "./images/rainy-day.png"
            }
            else if (data.weather[0].main === "Clear") {
                weather_image.src = "./images/clear-sky.png";
                set_image = "./images/clear-sky.png";
            }
            else if (data.weather[0].main === "Haze" || data.weather[0].main === "Clouds") {
                weather_image.src = "./images/cloudy.png";
                set_image = "./images/cloudy.png";
            }
            else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand") {
                weather_image.src = "./images/sand.png";
                set_image = "./images/sand.png";
            }
            else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Smoke") {
                weather_image.src = "./images/smoke.png";
                set_image = "./images/smoke.png";
            }
            else if (data.weather[0].main === "Snow") {
                weather_image.src = "./images/snowflake.png";
                set_image = "./images/snowflake.png";
            }
            else if (data.weather[0].main === "Thunderstorm") {
                weather_image.src = "./images/thunderstorm.png";
                set_image = "./images/thunderstorm.png";

            }
            let displayweather = document.getElementById("displayweather")
            displayweather.innerHTML += `
            <div class="col-md-4 col-lg-4 col-sm-6 col-12">
            <div class=" text-center rounded-2" id="yoursearch" onclick="recentsearch('${searchcity.value}')">
            <h6 class="pt-3">${searchcity.value}</h6>
            <img src="${set_image}" alt="" id="set_image" class="img-fluid pb-2 w-25">
            <p class=" pb-2">${settemp}</p>
        </div>      
              </div>
             `
        })
        
       
   
}
searchbtn.addEventListener("click", setweather)


let clear_input = document.getElementById("clear")
function clear() {

    searchcity.value = ""
}
clear_input.addEventListener("click", clear)

function recentsearch(x) {
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

