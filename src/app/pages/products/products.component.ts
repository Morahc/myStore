import { Component } from '@angular/core';
import { Product } from 'src/app/models/model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private productServices: ProductsService) {}
  products: Product[] = [];

  ngOnInit(): void {
    this.productServices.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
