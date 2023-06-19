"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(_x, _y, _radius) {
        super(_x, _y);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set number(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius = ${this._radius}`;
    }
    calculateArea() {
        return Math.PI * this._radius * this._radius;
    }
}
exports.Circle = Circle;
