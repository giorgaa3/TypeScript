export class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description?: string; 
    constructor(id: number, name: string, price: number, quantity: number, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}