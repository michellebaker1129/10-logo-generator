const { describe, expect, test } = require("@jest/globals");

const Circle = require('../circle');

describe('Circle', () => {
  test('should calculate the area', () => {
    const circle = new Circle('red', 'abc', 'black');
    expect(circle.getArea()).toBe(31415.926535897932);
  });

  test('it should render an SVG circle element', () => {
    const circle = new Circle('red', 'abc', 'black');
    expect(circle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="200" width="200"><circle cx="100" cy="100" r="100" stroke="red" stroke-width="3" fill="red" /><text x="0" y="100" fill="black">abc</text></svg>`);
  })

  test('it should return the color when you do circle.getColor', () => {
    const circle = new Circle('red');
    expect(circle.getColor()).toBe('red');
  })
});