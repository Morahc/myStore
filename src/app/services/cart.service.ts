import { Injectable } from '@angular/core';
import { addItem, Cart } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = {
    products: [],
    total: 0,
  };

  constructor() {}

  getCart(): Cart {
    return this.cart;
  }
  addProduct(id: number, name: string, price: number, quantity = 1): void {
    const index = this.cart.products.findIndex((prod) => prod.id === id);

    if (index == -1) {
      this.cart.products.push({ id, name, price, quantity });
    } else {
      this.cart.products[index].quantity += quantity;
    }
    this.cart.total = this.getCartTotal();
  }

  getCartTotal(): number {
    let totalSum = 0;
    this.cart.products.forEach(
      (prod) => (totalSum += prod.price * prod.quantity)
    );

    return totalSum;
  }

  clearCart(): void {
    this.cart = {
      products: [],
      total: 0,
    };
  }

  removeItem(id: number): void {
    this.cart.products = this.cart.products.filter((i) => i.id !== id);
    this.cart.total = this.getCartTotal();
  }
}
