"use strict";
var add1 = function (a, b) {
    //typeguard
    if (typeof a === 'string' || typeof b === 'string') {
        return "" + a + b;
    }
    return a + b;
};
console.log(add1(5, 6));
var printEmpInfo = function (emp) {
    console.log('name : ', emp.name);
    // typeguard deeply search in object
    if ('privileges' in emp) {
        console.log('privilages : ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate : ', emp.startDate);
    }
};
var emp = {
    name: 'Deepak',
    privileges: ['create-server'],
    startDate: new Date()
};
var emp1 = {
    name: 'Deepak',
    startDate: new Date()
};
// printEmpInfo(emp)
printEmpInfo(emp1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('drving....');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('drving a truck....');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('loading cargo : ', amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
var useVehicle = function (vehicle) {
    vehicle.drive();
    // if ('loadCargo' in vehicle)
    //another elegent way of doing that 
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
};
useVehicle(v1);
useVehicle(v2);
