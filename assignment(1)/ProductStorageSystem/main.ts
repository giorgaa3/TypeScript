import { Product } from './Product'; 
import { Inventory } from './Inventory';


const inventory = new Inventory();


inventory.addProduct(new Product(1, "Laptop", 1200, 10, "High-performance laptop"));
inventory.addProduct(new Product(2, "Smartphone", 800, 20, "Latest model smartphone"));
inventory.addProduct(new Product(3, "Tablet", 400, 15));

console.log("Products in Inventory:", inventory.viewProducts());

const product = inventory.getProductById(2);
console.log("Product with ID 2:", product);

inventory.changeQuantity(1, 5);
console.log("Updated product with ID 1:", inventory.getProductById(1));

const removed = inventory.removeProduct(3);
console.log("Product with ID 3 removed:", removed);

const totalValue = inventory.getTotalInventoryValue();
console.log("Total Inventory Value:", totalValue);