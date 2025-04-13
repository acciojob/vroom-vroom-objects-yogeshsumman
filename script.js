function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    // Call the parent constructor with the current instance
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Set up inheritance - SportsCar inherits from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;