type AddFn = (a: number, b: number) => number;
let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(2, 2));

interface named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends named {
  greet(pharse: string): void;
}

class Person implements Greetable {
  //   name: string;
  age: number;
  //   outputName?: string | undefined;
  constructor(public name?: string) {
    // this.name = n;
    this.age = 27;
    // this.outputName = 'test';
  }

  greet(pharse: string): void {
    if (this.name) {
      console.log(pharse + ' ' + this.name);
    } else {
      console.log('hi');
    }
  }
}

let user1: Greetable;

// user1 = new Person('Surya');
user1 = new Person();
// user1.name = 'asdasd';

user1.greet('hi, there 1`m ');
