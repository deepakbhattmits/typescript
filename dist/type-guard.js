"use strict";
const add1 = (a, b) => {
    //typeguard
    if (typeof a === 'string' || typeof b === 'string') {
        return `${a}${b}`;
    }
    return a + b;
};
console.log(add1(5, 6));
const printEmpInfo = (emp) => {
    console.log('name : ', emp.name);
    // typeguard deeply search in object
    if ('privileges' in emp) {
        console.log('privilages : ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate : ', emp.startDate);
    }
};
const emp = {
    name: 'Deepak',
    privileges: ['create-server'],
    startDate: new Date()
};
const emp1 = {
    name: 'Deepak',
    startDate: new Date()
};
// printEmpInfo(emp)
printEmpInfo(emp1);
class Car {
    drive() {
        console.log('drving....');
    }
}
class Truck {
    drive() {
        console.log('drving a truck....');
    }
    loadCargo(amount) {
        console.log('loading cargo : ', amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    // if ('loadCargo' in vehicle)
    //another elegent way of doing that 
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
};
useVehicle(v1);
useVehicle(v2);
