import { describe, expect, test } from "@jest/globals";
import Triangle from '../triangle';

describe('Triangle', () => {

  test('it should return the color when you do triangle.getColor', () => {
    const triangle = new Triangle('red');
    expect(triangle.getColor()).toBe('red');
  });

  test('it should allow you to override the color', () => {
    const triangle = new Triangle('red');
    triangle.setColor('blue');
    expect(triangle.getColor()).toBe('blue');
  });
});
