import { Product } from '.Product'; 

export class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(id: number): boolean {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true; 
        }
        return false; 
    }

    changeQuantity(id: number, newQuantity: number): boolean {
        const product = this.products.find(product => product.id === id);
        if (product) {
            product.quantity = newQuantity;
            return true; 
        }
        return false; 
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }

    getTotalInventoryValue(): number {
        return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    viewProducts(): Product[] {
        return this.products;
    }
}