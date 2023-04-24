import { describe, expect, test } from "@jest/globals";

import { Shape } from "./shape";

describe("Shape", () => {
  test("should be defined", () => {
    expect(Shape).toBeDefined();
  });

  test("should be a function", () => {
    expect(typeof Shape).toBe("function");
  })

  test("should create a new instance of Shape", () => {
    const shape = new Shape();
    expect(shape).toBeInstanceOf(Shape);
  })

  test("you can get the color by calling getColor", () => {
    const shape = new Shape("red");
    expect(shape.getColor()).toBe("red");
  })
});