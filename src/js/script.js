key = "f9270f64211f76226c91307cf90a2b45";

async function getCity(){
    cidade = document.getElementById("city").value.trim();

    let request = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&lang=pt_br&units=metric&limit=1&appid=${key}`);
    lat = request.data[0].lat;
    lon = request.data[0.].lon;
    return lat , lon
}

async function getWeather(){
    response = await getCity();
    cidade = document.getElementById("city").value = " "
    let request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);

    let actualWeather = request.data.main.temp - 273.15;
    let minWeather = request.data.main.temp_min - 273.15;
    let maxWeather = request.data.main.temp_max - 273.15;
    let cityName = request.data.name
    let sensation = request.data.main.feels_like - 273.15
    sensation = Math.round(sensation)
    actualWeather = Math.round(actualWeather);
    minWeather = Math.round(minWeather);
    maxWeather = Math.round(maxWeather);

    let icon = request.data.weather[0].icon
    let iconIsert = document.getElementById('icon')
    let skyCondition = request.data.weather[0].description

    iconIsert.innerHTML=`<img src="../../src/icons/${icon}.png">  <p class="text-center textInfo" >${skyCondition}</p> <p class="text-center textInfo" >Sensação termica de: ${sensation}°C</p>`
    

    document.getElementById('hideButton').style = `display: inline;`;

   genHTML(actualWeather, minWeather, maxWeather, cityName);



}

async function genHTML(actualWeather, minWeather, maxWather, cityName){
    document.getElementById('actualWeather').innerHTML ="Agora " +  actualWeather + "ºC";
    document.getElementById('minWeather').innerHTML ="Minimo "  + minWeather  + "ºC";
    document.getElementById('maxWeather').innerHTML ="Máximo "  + maxWather + "ºC";
    document.getElementById('cityName').innerHTML = cityName
}