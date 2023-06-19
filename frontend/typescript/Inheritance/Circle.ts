import { Shape } from "./Shape";

export class Circle extends Shape {
  private _radius: number;

  constructor(_x: number, _y: number, _radius: number) {
    super(_x, _y);
    this._radius = _radius;
  }

  private get radius(): number {
    return this._radius;
  }

  private set number(value: number) {
    this._radius = value;
  }

  getInfo(): string {
    return super.getInfo() + `, radius = ${this._radius}`;
  }
}
