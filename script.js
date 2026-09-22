function Cars(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log(`The ${make} ${model} is driving.`);
  };
}

var car1 = new Cars("Honda", "CRV", 2024);

var car2 = new Cars("Toyota", "Sienna", 2020);
car1.drive();
car2.drive();
