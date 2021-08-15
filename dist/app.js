"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    // we can initialize like this our class variables with the help of access modifiers
    // we can use other access modifier readonly which we can not change after initialization
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // name: string;
        // this will access within this class only
        // private employees: string[] = [];
        // this will access among the all classes where this is extended looks it acts like private only
        this.employees = [];
        // this.name=n
    }
    Department.prototype.describe = function () {
        console.log("Department " + this.id + " " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        // we can not change the ID because it is now readonly 
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length + " \n " + this.employees);
    };
    return Department;
}());
;
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No Report Found');
        },
        enumerable: false,
        configurable: true
    });
    // Override base class method with our special logic
    AccountingDepartment.prototype.addEmployee = function (text) {
        if (text === 'Deepak') {
            return;
        }
        this.employees.push(text);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var ItDepartment = new ITDepartment('d1', ['admin', 'CA ']);
// console.log(ItDepartment)
// calling describe method with Department object
ItDepartment.describe();
ItDepartment.addEmployee('Deepak');
ItDepartment.addEmployee('Puji');
// we can void this using the access modifiers like public and private
// ItDepartment.employees[2]='Chotu'
ItDepartment.printEmployeeInfo();
console.log(ItDepartment);
var accountingDepartment = new AccountingDepartment('ACCOUNTING', []);
console.log('TEST : ', accountingDepartment.mostRecentReport);
accountingDepartment.addReport('lawyer');
accountingDepartment.printReports();
accountingDepartment.addEmployee('Deepak');
accountingDepartment.addEmployee('Puji');
accountingDepartment.printEmployeeInfo();
console.log(accountingDepartment);
// const ItDepartmentCopy = { describe: ItDepartment.describe };
// const ItDepartmentCopy = { name:'Management',describe: ItDepartment.describe };
// here describe will give undefined becuase before Dot (.) 
// there is this object and which don't have name property
// if you add name to this object then it will print that  name
// ItDepartmentCopy.describe();
