import { describe, expect, test } from "@jest/globals";

import Circle from '../circle';

describe('Circle', () => {
  test('should calculate the area', () => {
    const circle = new Circle('red', 'abc', 'black');
    expect(circle.getArea()).toBe(31415.926535897932);
  });

  test('it should return the color when you do circle.getColor', () => {
    const circle = new Circle('red');
    expect(circle.getColor()).toBe('red');
  })

  test('it should allow you to override the color', () => {
    const circle = new Circle('red');
    circle.setColor('blue');
    expect(circle.getColor()).toBe('blue');
  });
});