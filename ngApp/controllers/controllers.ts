namespace oasis.Controllers {

  export class carController {
    public message = 'Hello from the home page!';

    public cars;
    public makes;


    constructor(private carService: oasis.Services.CarService) {
      console.log("in CarController constructor")
      this.cars = this.carService.listCars();
      this.makes = this.carService.listMakes();

    }

  }


  export class AboutController {
    public message = 'Hello from the about page!';
  }

}
