import *  as express from 'express';
import Car from '../models/car';

let router = express.Router();

//get all cars
router.get('/:id', (req, res) => {
  Car.find().then((cars) => {
    res.json(cars);
  }).catch((err) => {
    res.status(500);
  })
});
//get a single car by id

router.get('/:id', (req, res) => {
  Car.find().findById(req.params['id']).then((cars) => {
    res.json(cars);
  });
});
//create a new car
router.post('/:id', (req, res) => {
  let car = new Car();
  car.id = req.body.id;
  car.name = req.body.name;
  car.make = req.body.make;
  car.Price = req.body.Price;
  car.model = req.body.model;

  //save new car
  car.save().then((newCar) => {
    res.json(newCar);
  }).catch((err) => {
    res.status(400).json(err);
  });

});
//update existing car
router.post('/:id', (req, res) => {
  let carID = req.params.id;
  Car.findById(carID).then((car) => {
    car.id = req.body.id;
    car.name = req.body.name;
    car.make = req.body.make;
    car.Price = req.body.Price;
    car.model = req.body.model;

    //save updated car

    car.save().then((updatedCar) => {
      res.json(updatedCar);
    }).catch((err) => {
      res.status(400).json(err);
    });
  }).catch(() => {
    res.sendStatus(404);
  });
});
  //delete car
  router.delete('/edit:id', (req, res) => {
    let carId = req.params.id;
    Car.remove({ _id: carId }).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      res.status(500);
      console.log(err);
    });
  });
  export default router;
