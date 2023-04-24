class Circle extends Shape {
  constructor(radius, color, filled) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle[radius=${this.radius}, ${super.toString()}]`;
  }
}
