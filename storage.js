class Storage {
  constructor(){
    this.city;

    this.defaultCity = "Sydney";
  }

  // Set location
  setLocation(city){
    localStorage.setItem("city", city)
  }

  // get location
  getLocation(){
    // check local storage data
    if(localStorage.getItem("city") === null){
      this.city = this.defaultCity;
    } else{
      this.city = localStorage.getItem("city");
    }

    return {
      city: this.city
    }
  }

}