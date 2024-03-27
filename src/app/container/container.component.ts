import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, NgFor, ProductListComponent, ProductDetailsComponent, NgIf],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Sharon', 'John', 'Carol', 'Peter'];

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent!: ProductListComponent;

  setSearchText(value: string) {
    this.searchText = value
  }
}
