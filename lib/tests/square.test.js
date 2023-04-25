import { describe, expect, test } from "@jest/globals";
import Square from '../square';

describe('Square', () => {
  test('should calculate the area', () => {
    const square = new Square('red', 'abc', 'black');
    expect(square.getArea()).toBe(40000);
  });

  test('it should return the color when you do square.getColor', () => {
    const square = new Square('red');
    expect(square.getColor()).toBe('red');
  });

  test('it should allow you to override the color', () => {
    const square = new Square('red');
    square.setColor('blue');
    expect(square.getColor()).toBe('blue');
  });
});
