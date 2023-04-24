class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

//return a string with shape, color, filled
toString() {
    return `Shale[color=${this.color}, filled=${this.filled}]`;
}

getColor() {
    return this.color;
}

setColor(color) {
    this.color = color;
}

isFilled() {
    return this.filled;
}

getFilled(filled) {
    this.filled = filled;
}

// draw() {
//   //add code to draw the shape
// }

// getArea() {
//   //add code to calc the area of the shape
// }

module.exports = Shape;