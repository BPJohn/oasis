namespace oasis.Services {

  export class CarService {
    private carResource;
    private makesResource;

    public listMakes() {
      return this.makesResource.query();
    }
    public getCar(id) {
      return this.carResource.get({ id: id });
    }
    public listCars() {
      return this.carResource.query();
    }

    constructor($resource:ng.resource.IResourceService){
      console.log($resource);
      this.carResource =$resource('/api/cars/:id');
    }
  }



  angular.module('oasis').service('carService', CarService)
}
