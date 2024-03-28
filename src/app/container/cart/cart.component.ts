import { Component } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  selectedProducts!: Product[];
}
