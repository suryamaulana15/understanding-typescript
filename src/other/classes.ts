abstract class Departement {
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // console.log(Departement.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Departement): void;

  addEmployee(employee: string) {
    // this.id = 'asdasd';
    this.employees.push(employee);
  }

  printEmployees(this: Departement) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartements extends Departement {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe(this: ITDepartements): void {
    console.log('IT Depratment with ID: ' + this.id);
  }
}

class AccountingDepartements extends Departement {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!.');
    }
    this.addReport(value);
  }

  constructor(id: string, public reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe(this: AccountingDepartements): void {
    console.log('Accounting Depratment with ID: ' + this.id);
  }

  addEmployee(employee: string) {
    if (employee == 'surya') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports(this: AccountingDepartements) {
    console.log(this.reports);
  }
}

const addEmployee = Departement.createEmployee('Testing');
console.log(addEmployee, Departement.fiscalYear);

const it = new ITDepartements('it', ['Surya']);

// it.name = 'Change';

it.addEmployee('Salman');
it.addEmployee('Fahmi');
// it.employees[2] = 'asdas';

console.log(it);

it.describe();
it.printEmployees();

const acc = new AccountingDepartements('acc', []);
// console.log(acc);

acc.addEmployee('surya');
acc.addEmployee('salman');
acc.mostRecentReport = 'Add 1 task';
acc.addReport('something wen wrong');
console.log(acc.mostRecentReport);
acc.getReports();
acc.printEmployees();
acc.describe();
console.log(acc);

// const itCopy = { name: 'Dummy',describe: it.describe };

// itCopy.describe();
