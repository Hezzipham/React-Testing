class Department {
  static yearBorn(numb: number) {return numb + 20}
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
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
    constructor(id: string, public admins: string[]) {
      super(id, 'IT');
    }
  }
  
class AccountingDepartment extends Department {
  constructor(id: string, private readonly reports: string[]){
    super(id, 'ACC')
  }
  //add more method:
  addReport(text: string){
    this.reports.push(text);
  }
  printReport(){
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