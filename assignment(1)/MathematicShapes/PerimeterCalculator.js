"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerimeter = calculatePerimeter;
var ShapesClasses_1 = require("./ShapesClasses");
function calculatePerimeter() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 1) {
        // If only one parameter is passed, it's a square
        var square = new ShapesClasses_1.Square(args[0]);
        return square.getPerimeter();
    }
    else if (args.length === 2) {
        // If two parameters are passed, it's a rectangle
        var rectangle = new ShapesClasses_1.Rectangle(args[0], args[1]);
        return rectangle.getPerimeter();
    }
    else if (args.length === 1) {
        // If only one parameter is passed for a circle (radius)
        var circle = new ShapesClasses_1.Circle(args[0]);
        return circle.getPerimeter();
    }
    else {
        throw new Error("Invalid number of arguments.");
    }
}
