import { Circle } from "./Circle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);

for (let tempShape of theShapes) {
  console.log(tempShape.getInfo());
}
