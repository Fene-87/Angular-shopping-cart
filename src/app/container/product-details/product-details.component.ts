import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../../Models/Product';
import { NgIf, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'product-details',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input()
  productListComp?: ProductListComponent

  product?: Product

  ngOnInit() {
    this.product = this.productListComp?.selectedProduct
  }
}
