"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
// let myShape = new Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 10, 20);
let theShapes = [];
// theShapes.push(myShape);
theShapes.push(myCircle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
}
