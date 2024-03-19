import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgFor } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, NgFor, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Sharon', 'John', 'Carol', 'Peter']
}
