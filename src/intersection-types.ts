type Admin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}
type EmployeeElevated = Admin & Employee

const e1: EmployeeElevated = {
    name: 'Deepak',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinabl = string | number;
type Numeric = number | boolean;


type Universal = Combinabl & Numeric;