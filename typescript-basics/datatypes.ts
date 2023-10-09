//string

let lname: string;

lname = "Asif";

let newname = lname.toUpperCase();

console.log(newname);

//number

let age: number;

age = 10;

let dob = "25";

let result = parseInt(dob);

console.log(result);

// boolean

let isValid: boolean = false;

console.log(isValid);

// array

let empList: string[];
let numList: Array<number>;

numList = [1, 2, 3, 4, 5];
empList = ["A", "B", "C", "D", "E"];

let results = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === "A");
let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(emp);
console.log(sum);

// enum

const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

// tuples

let department: any;

department = "IT";
department = 10;
