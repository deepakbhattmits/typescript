"use strict";
// abstract class Department
// {
//     static fisCalYear = 2021;
//     // name: string;
//     // this will access within this class only
//     // private employees: string[] = [];
// // this will access among the all classes where this is extended looks it acts like private only
//     protected employees: string[] = [];
//     // we can initialize like this our class variables with the help of access modifiers
//     // we can use other access modifier readonly which we can not change after initialization
//     constructor(protected readonly id:string, public name: string) 
//     {
//         // this.name=n
//         // we can't access static property inside the constuctor
//         // because this keyword refers to the instance create based on this class
//         // if you want to use static member or property within the constructor use the 
//         // it's class name  
//         // console.log('accessing static property : ', this.fisCalYear,);
//         // console.log('constructor accessing static property : ', Department.fisCalYear)
//     }
//     // we can use this method without instantiating the class.
//     static createEmployee(name: string)
//     {
//         return { name };
//     }
//     abstract describe(this:Department):void
//     addEmployee(employee: string)
//     {
//         // we can not change the ID because it is now readonly 
//         // this.id = 'd2';
//         this.employees.push(employee)
//     }
//     printEmployeeInfo()
//     {
//         console.log(`${this.employees.length} \n ${this.employees}`)
//     }
// };
// class ITDepartment extends Department
// {
//     admins: string[];
//     constructor(id: string, admins: string[])
//     {
//         super(id, 'IT');
//         this.admins=admins
//     }
//         describe()
//     {
//         console.log('-> IT Department - ID', this.id)
//     }
// }
// class AccountingDepartment extends Department
// {
//     private lastReport: string;
//     get mostRecentReport()
//     {
//         if (this.lastReport)
//         {
//             return this.lastReport
//         }
//         throw new Error('No Report Found')
//     }
//     set mostRecentReport(value:string)
//     {
//         if (!value)
//         {
//             throw new Error('Please pass in a valid value !')
//         }
//         this.addReport(value)
//     }
//     constructor(id: string, private reports: string[])
//     {
//         super(id, 'Accounting');
//         this.lastReport=reports[0]
//     }
//     describe()
//     {
//         console.log('-> Accounting Department - ID', this.id)
//     }
//     // Override base class method with our special logic
//     addEmployee(text:string)
//     {
//         if (text === 'Deepak')
//         { throw new Error('Please pass in a valid value !')}
//             this.employees.push(text)
//     }
//     addReport(text: string)
//     {
//         this.reports.push(text);
//         this.lastReport= text
//     }
//     printReports()
//     {
//         console.log(this.reports)
//     }
// }
// const employee1 = Department.createEmployee('Deepak');
// const fisCalYear = Department.fisCalYear;
// // console.log('fiscal Year : ', fisCalYear)
// // console.log('Testing of static method : ', employee1)
// const ItDepartment = new ITDepartment('d1',['admin','CA '])
// console.log(ItDepartment)
// // calling describe method with Department object
// ItDepartment.describe();
// // ItDepartment.addEmployee('Deepak');
// // ItDepartment.addEmployee('Puji');
// // we can void this using the access modifiers like public and private
// // ItDepartment.employees[2]='Chotu'
// // ItDepartment.printEmployeeInfo();
// // console.log(ItDepartment);
// const accountingDepartment = new AccountingDepartment('ACCOUNTING', []);
// // accountingDepartment.mostRecentReport = ''
// // accountingDepartment.addReport('lawyer');
// // console.log('TEST : ',accountingDepartment.mostRecentReport);
// // accountingDepartment.printReports();
// // accountingDepartment.addEmployee('Deepak')
// // accountingDepartment.addEmployee('Puji')
// // accountingDepartment.printEmployeeInfo()
// // console.log(accountingDepartment)
// accountingDepartment.describe();
// // const ItDepartmentCopy = { describe: ItDepartment.describe };
// // const ItDepartmentCopy = { name:'Management',describe: ItDepartment.describe };
// // here describe will give undefined becuase before Dot (.) 
// // there is this object and which don't have name property
// // if you add name to this object then it will print that  name
// // ItDepartmentCopy.describe();
