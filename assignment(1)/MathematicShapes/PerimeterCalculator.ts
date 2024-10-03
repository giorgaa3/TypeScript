import { Rectangle, Square, Circle } from './ShapesClasses';

export function calculatePerimeter(...args: number[]): number {
    if (args.length === 1) {
        const square = new Square(args[0]);
        return square.getPerimeter();
    } else if (args.length === 2) {
        const rectangle = new Rectangle(args[0], args[1]);
        return rectangle.getPerimeter();
    } else if (args.length === 1) {
        const circle = new Circle(args[0]);
        return circle.getPerimeter();
    } else {
        throw new Error("Invalid number of arguments.");
    }
}
