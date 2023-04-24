import Shape from './shape.js';

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.radius = 100;
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

    render() {
        return this.renderSvg(`<circle cx="50%" cy="50%" r="${this.radius}" stroke="${this.color}" stroke-width="3" fill="${this.color}" />`, 'circle');
    }

    // returns the area of the circle
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// export the Circle class for other files to use
export default Circle;
