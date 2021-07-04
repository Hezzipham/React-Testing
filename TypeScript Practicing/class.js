"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    static yearBorn(numb) { return numb + 20; }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
console.log(Department.yearBorn(2015));
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'ACC');
        this.reports = reports;
    }
    //add more method:
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Hana');
it.addEmployee('Manu');
// it.employees[2] = 'Anna';
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', ['hihi']);
console.log(accounting);
accounting.addReport('Something went wrong...');
accounting.printReport();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=class.js.map