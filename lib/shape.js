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

    renderText(shape) {
        const yValue = shape === 'triangle' ? '30%' : '55%';
        return `<text style="font-family: sans-serif;" text-anchor="middle" font-size="60" x="50%" y="${yValue}" fill="${this.textColor}">${this.text}</text>`
    }

    renderSvg(shapeString, shape) {
        return `
            <svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" version="1.1" height="200" width="300">
                ${shapeString}
                ${this.renderText(shape)}
            </svg>
        `
    }
}

export default Shape;