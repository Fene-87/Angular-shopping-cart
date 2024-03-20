import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  gender: string;
  category: string;
  size: number[];
  color: string[];
  price: number;
  discountPrice?: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
}

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product!: Product
}
