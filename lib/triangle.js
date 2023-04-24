import Shape from './shape.js';

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
    this.side = 200;
  }

  getArea() {
    return 1.732 * this.side * this.side / 4;
  }

  setSide(side) {
    this.side = side;
  }

  getSide() {
    return this.side;
  }

  render() {
    return this.renderSvg(`<polygon style="transform: translate(50px, 15px);" points="0,0 ${this.side},0 ${this.side / 2},${this.side}" fill="${this.color}" />`, 'triangle');
  }
}

export default Triangle;