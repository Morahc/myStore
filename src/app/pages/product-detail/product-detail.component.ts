import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  constructor(
    private productServices: ProductsService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  quantity = 1;
  products: Product[] = [];

  id: number = 0;

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    quantity: 0,
    description: '',
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.productServices.getProducts().subscribe((data) => {
      this.products = data;
      let index = this.products.findIndex((prod) => prod.id == this.id);
      this.product = this.products[index];
    });
  }

  getProductCount(end: number): number[] {
    var temp = [];
    for (var i = 1; i <= end; i++) {
      temp.push(i);
    }
    return temp;
  }

  addToCart(): void {
    const { name, id, price } = this.product;
    const quantity = this.quantity;
    this.cartService.addProduct( id, name, price, quantity);
    alert('Added to cart');
  }
}
