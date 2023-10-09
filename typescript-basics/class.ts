class Employee {
  id!: number;
  name!: string;
  address!: string;

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  static getEmployeeCount(): number {
    return 50;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

let john = new Employee(1, "John Doe", "Highway 71");
let jane = new Manager(2, "Jane Doe", "01 Brooklyn");

console.log(john);
console.log(Employee.getEmployeeCount());
