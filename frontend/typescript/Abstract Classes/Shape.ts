export abstract class Shape {
  private _x: number;
  private _y: number;

  constructor(_x: number, _y: number) {
    this._x = _x;
    this._y = _y;
  }

  private get x(): number {
    return this._x;
  }

  private set x(value: number) {
    this._x = value;
  }

  private get y(): number {
    return this._y;
  }

  private set y(value: number) {
    this._y = value;
  }

  getInfo(): string {
    return `x = ${this._x}, y = ${this._y}`;
  }

  abstract calculateArea(): number;
}
