class Weather {
  constructor(city){
    this.apiKey = "314516512d45a893c3ddd41870bb907e";
    this.city = city;

  }

  // fetch from api
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  // change location
  changeLocation(city){
    this.city = city;
  }
}