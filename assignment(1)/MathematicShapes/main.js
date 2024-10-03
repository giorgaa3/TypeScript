"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PerimeterCalculator_1 = require("./PerimeterCalculator");
var squarePerimeter = (0, PerimeterCalculator_1.calculatePerimeter)(5);
console.log("Square Perimeter:", squarePerimeter);
var rectanglePerimeter = (0, PerimeterCalculator_1.calculatePerimeter)(4, 6);
console.log("Rectangle Perimeter:", rectanglePerimeter);
var circlePerimeter = (0, PerimeterCalculator_1.calculatePerimeter)(7);
console.log("Circle Perimeter:", circlePerimeter);
