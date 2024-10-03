import { calculatePerimeter } from "./PerimeterCalculator";

const squarePerimeter = calculatePerimeter(5); 
console.log("Square Perimeter:", squarePerimeter); 
const rectanglePerimeter = calculatePerimeter(4, 6); 
console.log("Rectangle Perimeter:", rectanglePerimeter); 

const circlePerimeter = calculatePerimeter(7);
console.log("Circle Perimeter:", circlePerimeter);