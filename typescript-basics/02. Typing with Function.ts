function add(a: number, b: number, c = 0, d?: number): number {
  //c is optional argument but defalt value is zero
  //d is purely optional
  return a + b + c;
}

var sum = add(1, 2, 3, 4);

console.log(sum);
