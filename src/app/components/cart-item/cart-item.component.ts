import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() price!: number;
  @Input() quantity!: number;

  @Output() removeItem = new EventEmitter<number>();

  remove(id: number) {
    this.removeItem.emit(id);
  }
}
