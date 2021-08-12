// this is not recommended let TS to infered this
// const person: { name: string; age: number } = {
//     const person:{name:string,age:number,hobbies:string[],   role:[number, string]}= {
//     name: 'Deepak Bhatt',
//         age: 30,
//         hobbies: ['Cooking', 'Dance'],
//         role:[1,'admin']
//     }
//     //exceptional case this will also work 
// person.role.push('super-admin')
// person.role[0] = 10;
// default behavior is starting from 0
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["IT"] = 1] = "IT";
    Role[Role["ACCOUNTANT"] = 2] = "ACCOUNTANT";
})(Role || (Role = {}));
;
// but if you want then you can also add starting number
// enum Role { ADMIN=100, IT, ACCOUNTANT };
// you can also store different values there 
// enum Role { ADMIN=100, IT=300, ACCOUNTANT =600};
// you can also store different STRINGS WITH MIXED TYPE there 
// enum Role { ADMIN=100, IT='Machine Installation', ACCOUNTANT = 60};
var person = {
    name: 'Deepak Bhatt',
    age: 30,
    hobbies: ['Cooking', 'Dance'],
    role: Role.ADMIN
};
var favoriteActions;
favoriteActions = ['Sports', 1];
console.log('person :', person);
if (person.role === Role.ADMIN) {
    console.log('this person is admin');
}
