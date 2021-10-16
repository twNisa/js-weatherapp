// init  object
const storage = new Storage();
// get stored location
const weatherLocation = storage.getLocation();

const weather = new Weather(weatherLocation.city);

const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation("melbourne");
document.querySelector("#btn-change").addEventListener("click", (e) => {
  const city = document.querySelector("#city").value;
  weather.changeLocation(city);
  // set local storage
  storage.setLocation(city);
  getWeather();
});

function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
