function greet(): string {
  return "Good Morning";
}

var greeting = greet(); //greeting is implicitly typed to String

var greeting2;

greeting2 = greet();
greeting2 = 10;
// now this greeting2 type is any
