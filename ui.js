class UI {
  constructor(){
    this.location = document.querySelector("#location")
    this.weatherDescri = document.querySelector("#weatherDescri")
    this.temp = document.querySelector("#temp")
    this.weatherIcon = document.querySelector("#weatherIcon")
    this.humidity = document.querySelector("#humidity")
    this.feelsLike = document.querySelector("#feelsLike")
    this.wind = document.querySelector("#wind")
    this.clouds = document.querySelector("#clouds")
  }

  paint(weather){
    this.location.innerHTML = `<h4>Location: ${weather.name}</h4>`;
    this.weatherDescri.textContent = `Description: ${weather.weather[0].description}`; 

    this.temp.textContent = `Temp(c): ${weather.main.temp}`;

    this.weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` );

    this.humidity.textContent = `Humidity: ${weather.main.humidity}`
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`
    this.wind.textContent = `Wind speed: ${weather.wind.speed}`
    this.clouds.textContent = `Clouds: ${weather.clouds.all}%`
  }

}