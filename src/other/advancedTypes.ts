type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'Surya',
  privileges: ['Can add syntax'],
  startDate: new Date(),
};

console.log(el);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function tambah(a: number, b: number): number;
function tambah(a: string, b: string): string;
function tambah(a: number, b: string): string;
function tambah(a: string, b: number): number;
function tambah(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = tambah('Surya', 'Maulana');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Surya',
  job: { title: 'CTO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

type unknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Privileges' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Surya', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 20 });

//const userInputElement = <HTMLInputElement>document.getElementById(‘user-input’);
const userInputElemet = document.getElementById('user-input');
if (userInputElemet) {
  (userInputElemet as HTMLInputElement).value = 'Hi there';
}

interface ErrorConatiner {
  [prop: string]: string;
}
const errorBag: ErrorConatiner = {
  email: 'Not a valid email!',
  userName: 'Must start with a capital character!',
};
