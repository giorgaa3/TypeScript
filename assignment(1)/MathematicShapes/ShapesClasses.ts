import { Shape } from './Shapes';


export class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}


export class Square implements Shape {
    constructor(private side: number) {}

    getPerimeter(): number {
        return 4 * this.side;
    }
}


export class Circle implements Shape {
    constructor(private radius: number) {}

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}