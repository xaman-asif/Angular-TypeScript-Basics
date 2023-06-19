"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Shape_1 = require("./Shape");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 10, 20);
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
