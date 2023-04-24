const { describe, expect, test } = require("@jest/globals");

const { checkColor } = require("../helpers");

describe('checkColor test', () => {

  test('should return true if color is valid', () => {
    expect(
      checkColor('red')
    ).toBe(true)
  })

  test('should return an error message if color is invalid', () => {
    expect(
      checkColor('#ggg')
    ).toBe("Invalid color, please enter a valid color keyword or hex code")
  })
})