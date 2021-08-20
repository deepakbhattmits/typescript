type Combine = string | number;


const add1 = (a: Combine, b: Combine) =>
{
    
    //typeguard
    if (typeof a === 'string' || typeof b === 'string')
    {
        return `${a}${b}`;
    }
    return a + b;

}
console.log(add1(5, 6))
type Admi = {
    name: string;
    privileges: string[];
}
type Employe = {
    name: string;
    startDate: Date;
}
type UnknownEmp = Employe| Admi
const printEmpInfo = (emp:UnknownEmp)=>{
    console.log('name : ', emp.name);

    // typeguard deeply search in object
    if ('privileges' in emp)
    {
        
        console.log('privilages : ', emp.privileges);
    }
     if ('startDate' in emp)
    {
        
        console.log('startDate : ', emp.startDate);
    }
}
const emp = {
    name: 'Deepak',
    privileges: ['create-server'],
    startDate: new Date()
}
const emp1 = {
    name: 'Deepak', 
    startDate: new Date()
}
// printEmpInfo(emp)
printEmpInfo(emp1)


class Car
{
    drive()
    {
        console.log('drving....')
    }
}


class Truck
{
    drive()
    {
        console.log('drving a truck....')
    }
    loadCargo(amount: number)
    {
        console.log('loading cargo : ', amount)
    }
}
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) =>
{
    vehicle.drive();

    // if ('loadCargo' in vehicle)


    //another elegent way of doing that 
    
    if(vehicle instanceof Truck)
    {
    
        vehicle.loadCargo(10);
}
}
useVehicle(v1);

useVehicle(v2);



