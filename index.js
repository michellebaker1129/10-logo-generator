// const { default: inquirer } = require("inquirer");
import inquirer from "inquirer";
import fs from "fs";

import { checkColor } from "./lib/helpers.js";
import Square from "./lib/square.js";
import Circle from "./lib/circle.js";
import Triangle from "./lib/triangle.js";

// build a class to ask questions to the user via inquirer
class SvgBuilder {
  constructor() {
    // build an array of questions
    this.questions = [
      // question for text (up to 3 chars)
      {
        type: "input",
        name: "textInput",
        message: "Enter up to three characters for your logo.",
        validate: (input) => {
          if (input.length > 3) {
            return "Please enter up to three characters.";
          } else {
            return true;
          }
        },
      },
      // question for text color (black or #000)
      {
        type: "input",
        name: "textColor",
        message:
          "What color would you like your text to be? (key color or hex value)",
        default: "white",
        validate: (color) => checkColor(color),
      },
      // question for shape color (black or #000)
      {
        type: "input",
        name: "shapeColor",
        message:
          "What color would you like your shape to be? (key color or hex value)",
        default: "black",
        validate: (color) => checkColor(color),
      },
      // question for shape (circle, square, triangle)
      {
        type: "list",
        name: "shapeChoice",
        message: "Which shape would you like your logo to be?",
        choices: ["circle", "square", "triangle"],
      },
    ];
  }

  // build a function to ask the questions
  askQuestions () {
    return inquirer.prompt(this.questions);
  }

  start() {
    // { textInput: 'abc', textColor: 'red', shapeColor: 'blue', shapeChoice: 'circle' }
    // const { textInput, textColor, shapeColor, shapeChoice }
    this.askQuestions().then(({ textInput, textColor, shapeColor, shapeChoice }) => {
      let shape;
      let svgOutput = `<?xml version="1.0" encoding="UTF-8"?>`;
      svgOutput += `\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`;

      // build an svg based on the answers given by the user
      switch (shapeChoice) {
        case "square":
          shape = new Square(shapeColor, textInput, textColor);
          break;
        case "triangle":
          shape = new Triangle(shapeColor, textInput, textColor);
          break;
        case "circle":
        default:
          shape = new Circle(shapeColor, textInput, textColor);
          break;
      }

      // write the svg to a file
      svgOutput += `\n${shape.render()}`;

      fs.writeFile("logo.svg", svgOutput, (err) => {
        if (err) throw err;
        console.log("Generated logo.svg");
      });
    })
  }
}

const app = new SvgBuilder();
app.start();