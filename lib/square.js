import Shape from './shape.js';

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
    this.side = 200;
  }

  getArea() {
    return this.side * this.side;
  }

  setSide(side) {
    this.side = side;
  }

  getSide() {
    return this.side;
  }

  render() {
    return this.renderSvg(`<rect x="50" width="${this.side}" height="${this.side}" style="fill: ${this.color}"/>`)
  }
}

export default Square;