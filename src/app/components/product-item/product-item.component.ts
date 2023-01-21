import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  constructor(private cartServices: CartService) {}

  @Input() id!: number;
  @Input() name!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() url!: string;

  addToCart({
    id,
    name,
    price,
  }: {
    id: number;
    name: string;
    price: number;
  }): void {
    this.cartServices.addProduct(id, name, price);
    alert(`${name} added to cart`);
  }
}
