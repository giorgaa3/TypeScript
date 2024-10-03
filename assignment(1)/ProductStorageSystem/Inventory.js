"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Inventory.prototype.removeProduct = function (id) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    };
    Inventory.prototype.changeQuantity = function (id, newQuantity) {
        var product = this.products.find(function (product) { return product.id === id; });
        if (product) {
            product.quantity = newQuantity;
            return true;
        }
        return false;
    };
    Inventory.prototype.getProductById = function (id) {
        return this.products.find(function (product) { return product.id === id; });
    };
    Inventory.prototype.getTotalInventoryValue = function () {
        return this.products.reduce(function (total, product) { return total + (product.price * product.quantity); }, 0);
    };
    Inventory.prototype.viewProducts = function () {
        return this.products;
    };
    return Inventory;
}());
exports.Inventory = Inventory;
