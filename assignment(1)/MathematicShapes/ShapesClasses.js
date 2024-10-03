"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = exports.Rectangle = void 0;
// Rectangle class
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
// Square class
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    Square.prototype.getPerimeter = function () {
        return 4 * this.side;
    };
    return Square;
}());
exports.Square = Square;
// Circle class
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
