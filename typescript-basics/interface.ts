export interface User {
  name: string;
  age: number;
  id?: number;
  email: string;
}

let user: User = { name: "John", age: 30, id: 1, email: "" };

let user1: User = { name: "Jane", age: 25, email: "" };

export interface Login {
  login(): User;
}

//Object destructuring
let {
  name: userName,
  age,
  email: userEmail,
}: User = {
  name: "John",
  age: 10,
  email: "",
};

//Array destructuring
let [user4, user5, user6]: User[] = [
  { name: "John", age: 1, email: "" },
  { name: "John", age: 1, email: "" },
  { name: "John", age: 1, email: "" },
];
