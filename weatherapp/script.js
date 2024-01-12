function fetchWeather(){
    let placename = inputBox.value
    console.log(placename);
    let appid = "8f9164d0bb1a347b51a7d0e25e247b6c"
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${placename}&appid=${appid}`

    fetch(url).then(res=>res.json()).then(data=>displayWeather(data))
}

function displayWeather(data){
    let temp = data.main.temp
    let minTemp = data.main.temp_min
    let maxTemp = data.main.temp_max
    let windSpeed = data.wind.speed
    let cloud = data.weather[0].description
    let place = data.name
    let country = data.sys.country
    let feels_like = data.main.feels_like
    let humidity = data.main.humidity
    if(country == "IN"){
        country = "India"
    }
    console.log(temp,minTemp,maxTemp,windSpeed,cloud,place,country,feels_like,humidity);
    let htmlData=`
    <div class="card" style="width: 23rem;background-color: white;">
        <div class="card-header p-4">
            <div class="d-flex justify-content-center">
                <img src="./cloud.jpeg" alt="" height="120px" width="120px" class="mb-3 mt-3">
            </div>
            <div class="text-center">
                <div class="fs-1 fw-semibold">${temp}°C</div>
                <div class="mb-3">${cloud}</div>
                <div class="mb-2"><i class="fa-solid fa-location-dot"></i> ${place}, ${country}</div>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col-6 border-end">
                    <div class="d-flex justify-content-center p-3">
                        <img src="./thermo.jpeg" alt="" height="50px" width="50px">
                        ${feels_like}°C <br>
                        Feels like                                    
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex justify-content-center p-3">
                        <img src="./water.jpeg" alt="" height="46px" width="22px" class="me-2">
                        ${humidity}% <br>
                        Humidity
                    </div>
                </div>
            </div>
        </div>
    </div>`

    document.querySelector("#result").innerHTML = htmlData
}