import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService, private router:Router) {}
  fullname = ''
  address = ''
  cardNumber = ''
  total = this.cartService.getCartTotal()

  cartData = this.cartService.getCart();

  setFullname(input: string) {
    this.fullname = input;
  }
  setAddress(input: string) {
    this.address = input;
  }
  setCard(input: string) {
    this.cardNumber = input;
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartData = this.cartService.getCart()
  }

  removeItem(id: number){
    this.cartService.removeItem(id)
    this.cartData = this.cartService.getCart()
  }

  checkout(){
    this.router.navigateByUrl('/checkout')
    this.cartService.clearCart()
    this.cartData = this.cartService.getCart()
  }
}
