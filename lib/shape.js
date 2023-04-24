class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
        this.padding = 10;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getText() {
        return this.text;
    }

    setText(text) {
        this.text = text;
    }

    getTextColor() {
        return this.textColor;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    renderText() {
        return `<text text-anchor="middle" font-size="60" x="49%" y="50%" fill="${this.textColor}">${this.text}</text>`
    }

    renderSvg(shapeString) {
        return `
            <svg viewBox="-10 -10 310 210" xmlns="http://www.w3.org/2000/svg" version="1.1" height="200" width="300">
                ${shapeString}
                ${this.renderText()}
            </svg>
        `
    }
}

export default Shape;